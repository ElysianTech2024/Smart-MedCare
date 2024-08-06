import Debug "mo:base/Debug";
import Http "mo:base/Http";
import Nat "mo:base/Nat";
import Auth "mo:backend/auth";  // Ensure the correct path and module name

actor Main {
    public query func handleRequest(req: Http.Request) : async Http.Response {
        switch (req.path) {
            case "/api/auth/login" {
                switch (req.method) {
                    case (Http Method.post) {
                        return Auth.login(req.body);
                    };
                    _ => return Http.response(405, "text/plain", "Method Not Allowed");
                }
            };
            case "/api/auth/signup" {
                switch (req.method) {
                    case (Http.Method.post) {
                        return Auth.signUp(req.body);
                    };
                    _ => return Http.response(405, "text/plain", "Method Not Allowed");
                }
            };
            case "/api/auth/logout" {
                switch (req.method) {
                    case (Http.Method.post) {
                        return Auth.logOut();
                    };
                    _ => return Http.response(405, "text/plain", "Method Not Allowed");
                }
            };
            _ => return Http.response(404, "text/plain", "Not Found");
        }
    }
}
