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
    }
  }

  get(key) {
    console.log(`[GET] key : ${key}`);

    const hash = this.hashing(key);

    if (this.isEmpty(this.bucket[hash])) {
      console.log(`데이터가 없습니다.`);
    } else if (this.bucket[hash].name !== key) {
      console.log(`다른 값이 존재합니다. : ${this.bucket[hash].name}`);
    } else {
      console.log(this.bucket[hash]);
    }
  }

  del(key) {
    console.log(`[DEL] key : ${key}`);

    const hash = this.hashing(key);

    if (this.isEmpty(this.bucket[hash])) {
      console.log("데이터가 없습니다.");
    } else if (this.bucket[hash].name !== key) {
      console.log(`다른 값이 존재합니다. : ${this.bucket[hash].name}`);
    } else {
      this.bucket[hash] = {};
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
}

const hashMap = new HashMap();

console.log(hashMap.bucket);

hashMap.set("john", 123);
hashMap.print();
hashMap.set("brad", 234);
hashMap.print();
hashMap.set("kaiz", 345);
hashMap.print();

hashMap.get("kaiz");
hashMap.print();

hashMap.del("john");
hashMap.print();

hashMap.del("brad");
hashMap.print();
