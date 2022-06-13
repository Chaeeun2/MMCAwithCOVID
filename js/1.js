// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션)
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1, // -1 무한반복
        yoyo: true, // 애니메이션 되돌아오기(설정안할 시 끈킴)
        ease: Power1.easeInOut, // 타이밍함수
        delay: random(0, delay) // 지연시간
    })
}
floatingObject('.floating1', .5, 30)
floatingObject('.floating2', .3, 50)
floatingObject('.floating3', 1, 20)
floatingObject('.floating4', .5, 40)

function click1() {
    location.href = "index.html"
}

function click2() {
    location.href = "index2.html"
}

function click3() {
    location.href = "index3.html"
}

function click4() {
    location.href = "index4.html"
}

function click5() {
    location.href = "index5.html"
}

function click6() {
    location.href = "index6.html"
}

function click7() {
    location.href = "index7.html"
}

function click8() {
    location.href = "index8.html"
}

function click9() {
    location.href = "index9.html"
}