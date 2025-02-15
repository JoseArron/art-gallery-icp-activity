import Text "mo:base/Text";
import Time "mo:base/Time";
import Array "mo:base/Array";
import Int "mo:base/Int";
import Debug "mo:base/Debug";

actor CommentManager {
  public type Comment = {
    imageUrl : Text;
    text : Text;
    timestamp : Int;
  };

  private var comments : [Comment] = [];

  public func createComment(imageUrl : Text, text : Text) : async [Comment] {
    let newComment : Comment = {
      imageUrl;
      text;
      timestamp = Time.now();
    };

    comments := Array.append<Comment>(comments, [newComment]);

    return comments;
  };

  public query func getAllComments() : async [Comment] {
    return comments;
  };

  public func deleteComment(id : Int) : async [Comment] {
    Debug.print(debug_show (id));
    comments := Array.filter<Comment>(comments, func(comment) = comment.timestamp != id);

    return comments;
  };

  public func editComment(id : Int, newText : Text) : async [Comment] {
    comments := Array.map<Comment, Comment>(
      comments,
      func(comment) {
        Debug.print(debug_show (comment.timestamp, id));
        if (comment.timestamp == id) {
          return {
            imageUrl = comment.imageUrl;
            text = newText;
            timestamp = comment.timestamp;
          };
        };
        return comment;
      },
    );

    return comments;
  };
};
