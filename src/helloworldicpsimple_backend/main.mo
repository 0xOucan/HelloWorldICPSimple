import Debug "mo:base/Debug";
import Array "mo:base/Array";

actor Main {
    private var names : [Text] = [];
    private var messages : [Text] = [];

    public func greet(name : Text) : async Text {
        names := Array.append<Text>(names, [name]);
        Debug.print("Name submitted: " # name);
        return "Hello, " # name # "!";
    };

    public func submitMessage(message : Text) : async Text {
        messages := Array.append<Text>(messages, [message]);
        Debug.print("Message submitted: " # message);
        return "Message received!";
    };

    public query func submittedNames() : async [Text] {
        return names;
    };

    public query func submittedMessages() : async [Text] {
        return messages;
    };
};
