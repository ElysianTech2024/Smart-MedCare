import Debug "mo:base/Debug";
import Http "mo:base/Http";
import Blob "mo:base/Blob";

actor Auth {
    // In-memory user store
    private var users : HashMap.Text<Text> = HashMap.Text<Text>();

    public func signUp(body: Blob) : async Http.Response {
        let request = Text.fromBlob(body);
        switch (Text.split(request, ",") ) {
            case (username, password) {
                if (HashMap.Text.contains(users, username)) {
                    return Http.response(400, "text/plain", "User already exists");
                };
                HashMap.Text.put(users, username, password);
                return Http.response(201, "text/plain", "User created successfully");
            };
        }
    }

    public func login(body: Blob) : async Http.Response {
        let request = Text.fromBlob(body);
        switch (Text.split(request, ",") ) {
            case (username, password) {
                switch (HashMap.Text.get(users, username)) {
                    case (?storedPassword) {
                        if (storedPassword == password) {
                            let token = "dummy-token";
                            return Http.response(200, "application/json", token);
                        } else {
                            return Http.response(401, "text/plain", "Invalid credentials");
                        }
                    };
                    case (_) {
                        return Http.response(404, "text/plain", "User not found");
                    }
                }
            };
        }
    }

    public func logOut() : async Http.Response {
        // Dummy implementation
        return Http.response(200, "text/plain", "Logged out successfully");
    }
}
