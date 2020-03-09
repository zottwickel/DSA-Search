/*
1. 
11,6,8
11,14,15

2. see "search"

3. A good way to do this would be to have a giant hash map of all the books (or hash maps for each of the 10 sections).
The hashing algorithm would take the bookname as a key, and return the dewey as a value. There would also be some metadata for things like the aisle or shelf of the library.
This algorithm would be fairly large to implement, and would take some time. Libraries are large.

4(1). 91 90 89 79 35 27 25 19 15 14
4(2). 8 10 11 9 6 7 5

5. inorder is: left node -> this node -> right node
preorder is: this node -> left node -> right node
postorder is: left node -> right node -> this node

6. this algorithm would the tree in pre-order adding an indent to every level deep it is.

7. this algorithm creates a new array of all of the differences between subsequent days,
it then searches for the greatest difference, then it converts it's index into the day and prints the day.

*/