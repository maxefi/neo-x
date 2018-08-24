const posts = {
  'posts': [
    {
      'id': 1,
      'author': { 'uid': 1, 'name': 'user 1' },
      'likes': 2,
      'reposts': [
        {
          'id': 5,
          'likes': 0,
          'author': { 'uid': 2, 'name': 'user 2' }
        },
        {
          'id': 6,
          'likes': 3,
          'author': { 'uid': 3, 'name': 'user 3' }
        }
      ]
    },
    {
      'id': 2,
      'author': { 'uid': 1, 'name': 'user 1' },
      'likes': 0,
      'reposts': []
    },
    {
      'id': 3,
      'author': { 'uid': 1, 'name': 'user 1' },
      'likes': 3,
      'reposts': [
        {
          'id': 7,
          'likes': 0,
          'author': { 'uid': 3, 'name': 'user 3' }
        },
        {
          'id': 8,
          'likes': 1,
          'author': { 'uid': 4, 'name': 'user 4' }
        }
      ]
    },
    {
      'id': 4,
      'author': { 'uid': 2, 'name': 'user 2' },
      'likes': 9,
      'reposts': [
        {
          'id': 9,
          'likes': 2,
          'author': { 'uid': 1, 'name': 'user 1' }
        }
      ]
    }
  ]
};

export default posts;
