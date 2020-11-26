#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

fn node_checker(head: Option<Box<ListNode>>, mut str: String) -> String {
    match head {
        Some(x) => {
            str.push(std::char::from_digit(x.val as u32, 10).unwrap());
            node_checker(x.next, str)
        }
        None => str,
    }
}

struct Solution {}

impl Solution {
    pub fn get_decimal_value(head: Option<Box<ListNode>>) -> i32 {
        use std::i32;
        let res = node_checker(head, String::new());
        i32::from_str_radix(&res[..], 2).unwrap()
    }
}

fn main() {}
