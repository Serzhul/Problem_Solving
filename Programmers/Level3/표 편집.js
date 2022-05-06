const Node = function (index, prevNode) {
    this.index = index;
    this.prev = prevNode;
    this.next;
};

function solution(n, k, cmd) {
    let answer = Array(n).fill('O');
    let root = new Node(0);
    let currentNode = root;
    let prevNode = root;

    for (let i = 1; i < n; i += 1) {
        const newNode = new Node(i, prevNode);
        prevNode.next = newNode;
        prevNode = newNode;

        if (i === k) {
            currentNode = newNode;
        }
    }

    const history = [];

    cmd.map((cur) => {
        const [command, count] = cur.split(' ');

        let i = 0;
        switch (command) {
            case 'U':
                while (i < count && currentNode.prev) {
                    currentNode = currentNode.prev;
                    i += 1;
                }
                break;
            case 'D':
                while (i < count && currentNode.next) {
                    currentNode = currentNode.next;
                    i += 1;
                }
                break;
            case 'C':
                history.push(currentNode);
                const prev = currentNode.prev;
                const next = currentNode.next;

                if (prev && next) {
                    prev.next = next;
                    next.prev = prev;
                    currentNode = next;
                } else if (prev) {
                    prev.next = null;
                    currentNode = prev;
                } else if (next) {
                    next.prev = null;
                    currentNode = next;
                }
                break;
            case 'Z':
                const node = history.pop();
                const prevNode = node.prev;
                const nextNode = node.next;
                if (prevNode) {
                    prevNode.next = node;
                }
                if (nextNode) {
                    nextNode.prev = node;
                }
                break;
            default:
                break;
        }
    });

    history.forEach((node) => {
        answer[node.index] = 'X';
    });

    console.log(answer);
    return answer.join('');
}

solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z']);
