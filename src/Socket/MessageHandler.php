<?php
namespace App\Socket;
 
use Exception;
use Ratchet\ConnectionInterface;
use Ratchet\MessageComponentInterface;
 
 
class MessageHandler implements MessageComponentInterface
{
    protected $clients;

    public function __construct() {
        $this->clients = new \SplObjectStorage;
    }
 
    public function onOpen(ConnectionInterface $conn)
    {
        $this->clients->attach($conn);

        echo "New connection! {$conn->resourceId}\n";
    }
 
    public function onMessage(ConnectionInterface $from, $msg)
    {
        foreach ($this->clients as $client) {
            if ($from !== $client) {
                $client->send($msg);
            }
        }
    }
 
    public function onClose(ConnectionInterface $conn)
    {
 
    }
 
    public function onError(ConnectionInterface $conn, Exception $e)
    {
 
    }
}