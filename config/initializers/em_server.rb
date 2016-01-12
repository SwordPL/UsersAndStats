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
      if %w(user_id task_id compilation_successful execution_time).all? { |x| msg.has_key? x }
        Solution.create(user_id: msg['user_id'],
                        task_id: msg['task_id'],
                        compilation_successful: msg['compilation_successful'],
                        execution_time: msg['execution_time'])
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
