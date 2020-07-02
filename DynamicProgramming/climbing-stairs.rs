impl Solution {
    pub fn climb_stairs(n: i32) -> i32 {
        let mut root = 0;
        countTree(root, n)
    }
}

fn countTree(node: i32, n: i32) -> i32 {
    if node == -1 {
        return  0
    } else if node == n {
        return 1
    }

    let left = if n >= node + 1 { node + 1 } else { -1 };
    let right = if n >= node + 2 { node + 2 } else { -1 };
    countTree(left, n) + countTree(right, n)
}
