require 'json'
require 'eventmachine'

if defined?(Thin)
  EM.next_tick {start_server}
else
  EM.run {start_server}
end

def start_server
  WebSocket::EventMachine::Server.start(:host => '0.0.0.0', :port => 3001) do |ws|
    ws.onopen do
      puts 'Client connected'
    end

    ws.onmessage do |msg, _|
      begin
      msg = JSON.parse(msg)
      if %w(user_id task_id result_type).all? { |x| msg.has_key? x }
        Solution.create(user_id: msg['user_id'],
                        task_id: msg['task_number'],
                        compilation_successful: msg['result_type'],
                        execution_time: (msg['result_value'] if msg.has_key? 'result_value'))
        end
      rescue StandardError
        # ignored
      end
    end

    ws.onclose do
      puts 'Client disconnected'
    end
  end
end
