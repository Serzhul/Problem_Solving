function solution(phone_number) {
    const getPrivacyNum = phone_number.slice(0, phone_number.length - 4);

    return phone_number.replace(
        getPrivacyNum,
        '*'.repeat(getPrivacyNum.length)
    );
}

solution('01033334444');
