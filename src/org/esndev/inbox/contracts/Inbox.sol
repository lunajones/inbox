pragma solidity ^0.4.17;

contract Inbox {

    string private message;

    function Inbox(string newMessage) public {
        message = newMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns(string){
        return message;
    }

}