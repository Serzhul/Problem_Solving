class HashMap {
  constructor() {
    this.size = 6;
    this.bucket = Array.from({ length: this.size }, () => ({}));
  }

  set(key, value) {
    console.log(`[SET] key : ${key} value : ${value}`);
    const hash = this.hashing(key);

    if (this.isEmpty(this.bucket[hash])) {
      this.bucket[hash] = {
        name: key,
        phoneNumber: value,
      };
    } else {
      console.log(`충돌이 일어났습니다 : ${this.bucket[hash].name}`);
      for (
        let i = (hash + 1) % this.size;
        i !== hash;
        i = (i + 1) % this.size
      ) {
        console.log(`버킷 순회를 시작합니다. ${i}`);

        if (this.isEmpty(this.bucket[i])) {
          this.bucket[i] = {
            name: key,
            phoneNumber: value,
          };
          return;
        }
      }

      console.log("버킷이 모두 찼습니다.");
    }
  }

  get(key) {
    console.log(`[GET] key : ${key}`);

    const hash = this.hashing(key);

    if (this.isSame(this.bucket[hash].name, key)) {
      console.log(this.bucket[hash]);
      return;
    }

    console.log(`충돌이 일어났습니다. ${this.bucket[hash].name}`);
    for (let i = (hash + 1) % this.size; i !== hash; i = (i + 1) % this.size) {
      console.log(`버킷 순회를 시작합니다 : ${i}`);
      if (this.isSame(this.bucket[i].name, key)) {
        console.log(this.bucket[i]);
        return;
      }
    }

    console.log("찾으려는 값이 없습니다.");
  }

  del(key) {
    console.log(`[DEL] key : ${key}`);

    const hash = this.hashing(key);

    if (this.isSame(this.bucket[hash].name, key)) {
      this.bucket[hash] = {};
      return;
    }

    console.log(`충돌이 일어났습니다. ${this.bucket[hash].name}`);
    for (let i = (hash + 1) % this.size; i !== hash; i = (i + 1) % this.size) {
      console.log(`버킷 순회를 시작합니다 : ${i}`);
      if (this.isSame(this.bucket[i].name, key)) {
        this.bucket[hash] = {};
        return;
      }
    }
  }

  hashing(key) {
    // 각 자리의 ascii 값을 모두 더하고 bucket size로 나눈 값
    let ret = 0;
    const len = key.length;

    for (let i = 0; i < len; i += 1) {
      ret += key[i].charCodeAt();
    }

    ret %= this.size;
    return ret;
  }

  print() {
    console.log("=== print ===");
    console.log(this.bucket);
  }

  isEmpty(data) {
    return JSON.stringify(data) === JSON.stringify({});
  }

  isSame(d1, d2) {
    return !this.isEmpty() && d1 === d2;
  }
}

const hashMap = new HashMap();

console.log(hashMap.bucket);

hashMap.set("john", 123);
hashMap.print();
hashMap.set("brad", 234);
hashMap.print();
hashMap.set("kaiz", 345);
hashMap.print();
hashMap.set("olivia", 678);
hashMap.print();
hashMap.set("lily", 789);
hashMap.print();
hashMap.set("joy", 789);
hashMap.print();
hashMap.set("eva", 789);
hashMap.print();

hashMap.get("brad");
hashMap.get("eva");

hashMap.del("brad");
hashMap.print();
hashMap.del("eva");
hashMap.print();
hashMap.del("john");
hashMap.print();
