/* 가장 가까운 공통 조상 찾기 
이진 검색 트리에 있는 두 노드의 값이 주어졌을 때 가장 가까이 있는 공통 조상을 찾아라 ( 두 값은 모두 트리 안에 있다)
*/

function findLowestCommonAncestor(root, value1, value2) {
    while (root) {
        const { val } = root;

        if (val < value1 && val < value2) {
            root = root.left;
        } else if (val > value1 && val > value2) {
            root = root.right;
        } else return root;
    }

    return null;
}
