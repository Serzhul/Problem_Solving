function solution(skill, skill_trees) {
    const skillMap = skill.split('');
    const skillTreeMap = skill_trees.map((tree) => tree.split(''));

    let answer = 0;

    for (const skillTree of skillTreeMap) {
        let curSkill = 0;
        let isPossible = true;

        for (let i = 0; i < skillTree.length; i += 1) {
            const skillTreeIdx = skillMap.indexOf(skillTree[i]);
            if (skillTreeIdx >= 0) {
                if (curSkill < skillTreeIdx) {
                    isPossible = false;
                    break;
                }
                curSkill += 1;
            }
        }
        if (isPossible) answer += 1;
    }

    return answer;
}
solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']);
