export const idlFactory = ({ IDL }) => {
  const Comment = IDL.Record({
    'text' : IDL.Text,
    'imageUrl' : IDL.Text,
    'timestamp' : IDL.Int,
  });
  return IDL.Service({
    'createComment' : IDL.Func([IDL.Text, IDL.Text], [IDL.Vec(Comment)], []),
    'deleteComment' : IDL.Func([IDL.Int], [IDL.Vec(Comment)], []),
    'editComment' : IDL.Func([IDL.Int, IDL.Text], [IDL.Vec(Comment)], []),
    'getAllComments' : IDL.Func([], [IDL.Vec(Comment)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
