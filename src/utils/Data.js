// Tetrominos list and differents ratations
export const tetrominos = {
  'T': [[[0, 0, 0, 0, 0]
        ,[0, 0, 0, 0, 0]
        ,[0, 1, 1, 1, 0]
        ,[0, 0, 1, 0, 0]
        ,[0, 0, 0, 0, 0]],
        [[0, 0, 0, 0, 0]
        ,[0, 0, 1, 0, 0]
        ,[0, 1, 1, 0, 0]
        ,[0, 0, 1, 0, 0]
        ,[0, 0, 0, 0, 0]],
        [[0, 0, 0, 0, 0]
        ,[0, 0, 1, 0, 0]
        ,[0, 1, 1, 1, 0]
        ,[0, 0, 0, 0, 0]
        ,[0, 0, 0, 0, 0]],
        [[0, 0, 0, 0, 0]
        ,[0, 0, 1, 0, 0]
        ,[0, 0, 1, 1, 0]
        ,[0, 0, 1, 0, 0]
        ,[0, 0, 0, 0, 0]]]
  ,
  'J': [[[0, 0, 0, 0, 0]
        ,[0, 0, 0, 0, 0]
        ,[0, 2, 2, 2, 0]
        ,[0, 0, 0, 2, 0]
        ,[0, 0, 0, 0, 0]],
        [[0, 0, 0, 0, 0]
        ,[0, 0, 2, 0, 0]
        ,[0, 0, 2, 0, 0]
        ,[0, 2, 2, 0, 0]
        ,[0, 0, 0, 0, 0]],
        [[0, 0, 0, 0, 0]
        ,[0, 2, 0, 0, 0]
        ,[0, 2, 2, 2, 0]
        ,[0, 0, 0, 0, 0]
        ,[0, 0, 0, 0, 0]],
        [[0, 0, 0, 0, 0]
        ,[0, 0, 2, 2, 0]
        ,[0, 0, 2, 0, 0]
        ,[0, 0, 2, 0, 0]
        ,[0, 0, 0, 0, 0]]]
  ,
  'Z': [[[0, 0, 0, 0, 0]
        ,[0, 0, 0, 0, 0]
        ,[0, 3, 3, 0, 0]
        ,[0, 0, 3, 3, 0]
        ,[0, 0, 0, 0, 0]],
        [[0, 0, 0, 0, 0]
        ,[0, 0, 0, 3, 0]
        ,[0, 0, 3, 3, 0]
        ,[0, 0, 3, 0, 0]
        ,[0, 0, 0, 0, 0]]]
  ,
  'O': [[[0, 0, 0, 0, 0]
        ,[0, 0, 0, 0, 0]
        ,[0, 1, 1, 0, 0]
        ,[0, 1, 1, 0, 0]
        ,[0, 0, 0, 0, 0]]]
  ,
  'S': [[[0, 0, 0, 0, 0]
        ,[0, 0, 0, 0, 0]
        ,[0, 0, 2, 2, 0]
        ,[0, 2, 2, 0, 0]
        ,[0, 0, 0, 0, 0]],
        [[0, 0, 0, 0, 0]
        ,[0, 0, 2, 0, 0]
        ,[0, 0, 2, 2, 0]
        ,[0, 0, 0, 2, 0]
        ,[0, 0, 0, 0, 0]]]
  ,
  'L': [[[0, 0, 0, 0, 0]
        ,[0, 0, 0, 0, 0]
        ,[0, 3, 3, 3, 0]
        ,[0, 3, 0, 0, 0]
        ,[0, 0, 0, 0, 0]],
        [[0, 0, 0, 0, 0]
        ,[0, 3, 3, 0, 0]
        ,[0, 0, 3, 0, 0]
        ,[0, 0, 3, 0, 0]
        ,[0, 0, 0, 0, 0]],
        [[0, 0, 0, 0, 0]
        ,[0, 0, 0, 3, 0]
        ,[0, 3, 3, 3, 0]
        ,[0, 0, 0, 0, 0]
        ,[0, 0, 0, 0, 0]],
        [[0, 0, 0, 0, 0]
        ,[0, 0, 3, 0, 0]
        ,[0, 0, 3, 0, 0]
        ,[0, 0, 3, 3, 0]
        ,[0, 0, 0, 0, 0]]]
  ,
  'I': [[[0, 0, 0, 0, 0]
        ,[0, 0, 0, 0, 0]
        ,[1, 1, 1, 1, 0]
        ,[0, 0, 0, 0, 0]
        ,[0, 0, 0, 0, 0]],
        [[0, 0, 1, 0, 0]
        ,[0, 0, 1, 0, 0]
        ,[0, 0, 1, 0, 0]
        ,[0, 0, 1, 0, 0]
        ,[0, 0, 0, 0, 0]]]
}
// Exadecimal value of the colors
export const colors = [
  ['#0058F8', '#3CBCFC'],
  ['#00A800', '#B8F818'],
  ['#D800CC', '#F878F8'],
  ['#0058F8', '#58D854'],
  ['#E40058', '#58F898'],
  ['#58F898', '#6888FC'],
  ['#F83800', '#7C7C7C'],
  ['#6844FC', '#A80020'],
  ['#0058F8', '#F83800'],
  ['#F83800', '#FCA044']
];
// Number of frame between drops of the piece for each level
export const speed = [48, 43, 38, 33, 28, 23, 18, 13, 8, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
