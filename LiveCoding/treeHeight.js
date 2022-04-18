// 트리 높이의 값 구하기 : 서브 트리 중 더 큰 쪽의 높이에 1을 더한 값이 트리 높이가 된다.

function treeHeight(node) {
    if (node === null) return 0;

    return 1 + Math.max(treeHeight(node.left), node.right);
}
