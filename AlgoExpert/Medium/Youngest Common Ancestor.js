class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }

  addAsAncestor(descendants) {
    for (const descendant of descendants) {
      descendant.ancestor = this;
    }
  }
}

function getTrees() {
  const trees = {};
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  for (const letter of ALPHABET) {
    trees[letter] = new AncestralTree(letter);
  }
  return trees;
}

const trees = getTrees();
trees["A"].addAsAncestor([trees["B"], trees["C"]]);
trees["B"].addAsAncestor([trees["D"], trees["E"]]);
trees["D"].addAsAncestor([trees["H"], trees["I"]]);
trees["C"].addAsAncestor([trees["F"], trees["G"]]);

function checkIsSameNode(node1, node2) {
  return node1.name === node2.name;
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  let curOne = descendantOne;
  let curTwo = descendantTwo;

  const getHeight = (node, height) => {
    if (!node) return height;

    let target = 0;

    target += getHeight(node.ancestor, height + 1);

    return target;
  };

  let heightOne = getHeight(descendantOne, 0);
  let heightTwo = getHeight(descendantTwo, 0);

  if (heightOne < heightTwo) {
    while (heightOne < heightTwo) {
      curTwo = curTwo.ancestor;
      heightTwo -= 1;
    }

    if (curTwo.name === curOne.name) return curOne;
    while (
      curOne.name !== topAncestor.name &&
      curTwo.name !== topAncestor.name
    ) {
      curOne = curOne.ancestor;
      curTwo = curTwo.ancestor;

      if (checkIsSameNode(curOne, curTwo)) return curOne;
    }
  } else {
    while (heightOne > heightTwo) {
      curOne = curOne.ancestor;
      heightOne -= 1;
    }
    if (curTwo.name === curOne.name) return curOne;
    while (
      curOne.name !== topAncestor.name &&
      curTwo.name !== topAncestor.name
    ) {
      curOne = curOne.ancestor;
      curTwo = curTwo.ancestor;

      if (checkIsSameNode(curOne, curTwo)) return curOne;
    }
  }
}

console.log(getYoungestCommonAncestor(trees.A, trees.E, trees.I));
