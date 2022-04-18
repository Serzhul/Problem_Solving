// 인오더 종주 의사코드
/**
 * 1. 왼쪽 서브 트리에 대해 프리오더 종주를 시행한다.
 * 2. 루트(또는 서브 트리의 루트) 값을 출력한다.
 * 3. 오른쪽 서브 트리에 대해 프리오더 종주를 시행한다.
 */

function inorderTraversal(root) {
    const data = [];

    const current = root;

    if (current === null) return [];

    function traverse(node) {
        if (node.left) traverse(node.left);

        if (node.val) data.push(node.val);

        if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
}
