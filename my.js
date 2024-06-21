function calculate_sum(a, b) {
     var sum = a + b;
     return sum;
} 

// level 1

function fun1_1_1(a) {
    if (a < 0) return "Negative"
    else return "Not negative"
}

function fun1_1_2(a) {
    return a.length
}

function fun1_1_3(a) {
    return a[a.length-1]
}

function fun1_1_4(a) {
    if (a % 2 == 0) return 1
    else return 0
}

function fun1_1_5(a, b) {
    if (a[0] == b[0]) return 1
    else return 0
}

function fun1_1_6(a) {
    if (a[a.length-1] == 'ь') return a[a.length-2]
    return a[a.length-1]
}


function fun1_2_1(a) {
    return a.toString()[0]
}

function fun1_2_2(a) {
    a = String(a)
    return a[a.length-1]
}

function fun1_2_3(a) {
    a = a.toString()
    return Number(a[0]) + Number(a[a.length-1])
}

function fun1_2_4(a) {
    a = a.toString()
    return a.length
}

function fun1_2_5(a, b) {
    a = a.toString()
    b = b.toString()
    return (a[0] === b[0])
}


function fun1_3_1(a) {
    if (a.length > 1) console.log(a[a.length - 2])
    return null
}


function fun1_3_2(a, b) {
    return a % b == 0
}

function fun1_4_1() {
    for (let i = 1; i <= 100; i++) {
        console.log(i)
    }
    return null
}

function fun1_4_2() {
    for (let i = -100; i <= 0; i++) {
        console.log(i)
    }
    return null
}

function fun1_4_3() {
    for (let i = 100; i >= 1; i--) {
        console.log(i)
    }
    return null
}

function fun1_4_4() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) console.log(i)
    }
    return null
}

function fun1_4_5() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) console.log(i)
    }
    return null
}

function fun1_5_1() {
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        sum += i
    }
    return sum
}

function fun1_5_2() {
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) sum += i
    }
    return sum
}

function fun1_5_3() {
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        if (i % 2 != 0) sum += i
    }
    return sum
}

function fun1_5_4(a, b) {
    return a % b
}





function Result() {
    console.log(fun1_5_4(12,6))
}

Result()





