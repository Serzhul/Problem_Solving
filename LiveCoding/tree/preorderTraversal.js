// 프리오더 종주 의사코드
/**
 * 1. 루트(또는 서브 트리의 루트) 값을 출력한다.
 * 2. 왼쪽 서브 트리에 대해 프리오더 종주를 시행한다.
 * 3. 오른쪽 서브 트리에 대해 프리오더 종주를 시행한다.
 */

function preorderTraversal(root) {
    const data = [];

    const current = root;

    if (current === null) return [];

    function traverse(node) {
        if (node.val) data.push(node.val);

        if (node.left) traverse(node.left);

        if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
}

// Solution2 : 재귀 호출 사용하지 않고 프리오더 종주하기 => 스택 사용

/** 의사 코드
 * 1. 스택을 만든다.
 * 2. 루트 노드를 스택에 집어 넣는다.
 * 3. 스택이 비어있지 않은 동안
 *  - 노드를 하나 꺼낸다.
 *  - 값을 담는다.
 *  - 오른쪽 자식이 있다면 오른쪽 자식을 스택에 넣는다.
 *  - 왼쪽 자식이 있다면 왼쪽 자식을 스택에 넣는다.
 */
function preorderTraversalWithoutRecursion(root) {
    const data = [];
    const stack = [];

    if (root === null) return [];

    stack.push(root);

    while (stack.length) {
        const node = stack.pop();

        data.push(node.val);

        if (node.right !== null) {
            stack.push(node.right);
        }

        if (node.left !== null) {
            stack.push(node.left);
        }
    }

    return data;
}
