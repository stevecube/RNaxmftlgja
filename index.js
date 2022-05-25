// 변수 선언
const label1 = document.getElementById('output-1');
const label2 = document.getElementById('output-2');
const input1 = document.getElementById('input-1');
const outputt = document.getElementById('outputt');
const label_1 = document.getElementById('label-1');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const forth = document.getElementById('forth');
const fifth = document.getElementById('fifth');
const sixth = document.getElementById('sixth');
const seventh = document.getElementById('seventh');
const eight = document.getElementById('eight');
const ninth = document.getElementById('ninth');
const tenth = document.getElementById('tenth');
const eleventh = document.getElementById('eleventh');
const twelfth = document.getElementById('twelfth');
const thirteenth = document.getElementById('thirteenth');
const fourteenth = document.getElementById('fourteenth');
const fifteenth = document.getElementById('fifteenth');
const sixteenth = document.getElementById('sixteenth');
const seventeenth = document.getElementById('seventeenth');
const eightteenth = document.getElementById('eightteenth');
const nineteenth = document.getElementById('nineteenth');
const twentieth = document.getElementById('twentieth');
const twentyfirst = document.getElementById('twentyfirst');
const twentysecond = document.getElementById('twentysecond');
// 변수 선언
start_2 = ': ';
score = 0;
lo = 0;
A = '마음속에 떠오르는 생각이나 운율이 있는 언어로 압축하여 표현하는 문학';
B = '정해진 형식에 맞추어 쓴 시';
C = '정해진 형식 없이 자유롭게 쓴 시';
D = '행을 구분하지 않고 줄글로 쓴 시';
E = '개인의 감정과 생각을 주관적으로 표현한 시';
F = '역사적 사건이나 신화, 전설, 영웅의 이야기를 쓴 시';
G = '연극의 대본처럼 대사로 이루어진 시';
H = '시를 읽을 때 느껴지는 말의 가락, 리듬';
I = '시인이 시를 통해 말하고자 하는 중심 생각';
J = '시를 읽을 때 떠오르는 느낌이나 모습';
K = '시 속에서 단어가 사전적 의미 외에 시인이 부여한 다양하능 의미를 품고 있는 것';
L = '사전적, 지시적, 객관적';
M = '함축적, 다의적, 주관적';
N = '시 속에서 시어가 하는 역할 또는 작용';
O = '시에서 느껴지는 말의 가락';
P = '외형률';
Q = '내재율';
R = '일정한 글자 수 반복';
S = '음보 반복';
T = '같거나, 비슷한 소리, 단어 반복';
U = '일정한 위치에서 같은 말 반복';
V = '문장 구조 반복';
W = '의성어, 의태어 사용';
b = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T];
correct = '맞히셨습니다.';
incorrect = '맞히지 못하셨습니다. 다시 시도하세요';
correctorincorrect = false;
// 배열 선언
label_output = ['시의 개념과 특성', '시적 화자'];
AA = '시';
BB = '정형시';
CC = '자유시';
DD = '산문시';
EE = '서정시';
FF = '서사시';
GG = '극시';
HH = '운율';
II = '주제';
JJ = '심상';
KK = '시어의 함축적 의미';
LL = '일상어';
MM = '시어';
NN = '시어의 기능';
OO = '운율';
PP = '운율의 종류 첫 번째';
QQ = '운율의 종류 두 번째';
RR = '운율 형성 방법 첫 번째';
SS = '운율 형성 방법 두 번째';
TT = '운율 형성 방법 세 번째';
UU = '운율 형성 방법 네 번째';
VV = '운율 형성 방법 다섯 번째';
WW = '운율 형성 방법 여섯 번째';
label1_output = [AA, BB, CC, DD, EE, FF, GG, HH, II, JJ, KK, LL, MM, NN, OO, PP, QQ, RR, SS, TT];
label1.innerHTML = label_output[0];
label2.innerHTML = label1_output[0] + start_2;
outputt.innerHTML = '제출';
// 공용 함수
function change_1() {
    lo += 1;
    label2.innerHTML = label1_output[lo] + start_2;
    score += 1;
};
//  중복 체크 함수
console.log(b);
let number = b.length;
function duplicate_check() {
    const random1 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random1 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random1 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[4])  {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[11]) {
        a1 = b.slice(0, 11);
        a2 = b.splice(12, number-11);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[12]) {
        a1 = b.slice(0, 12);
        a2 = b.splice(13, number-12);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[13]) {
        a1 = b.slice(0, 13);
        a2 = b.splice(14, number-13);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[14]) {
        a1 = b.slice(0, 14);
        a2 = b.splice(15, number-14);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[15]) {
        a1 = b.slice(0, 15);
        a2 = b.splice(16, number-15);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[16]) {
        a1 = b.slice(0, 16);
        a2 = b.splice(17, number-16);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[17]) {
        a1 = b.slice(0, 17);
        a2 = b.splice(18, number-17);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[18]) {
        a1 = b.slice(0, 18);
        a2 = b.splice(19, number-18);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[19]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random2 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random2 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random2 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[11]) {
        a1 = b.slice(0, 11);
        a2 = b.splice(12, number-11);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[12]) {
        a1 = b.slice(0, 12);
        a2 = b.splice(13, number-12);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[13]) {
        a1 = b.slice(0, 13);
        a2 = b.splice(14, number-13);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[14]) {
        a1 = b.slice(0, 14);
        a2 = b.splice(15, number-14);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[15]) {
        a1 = b.slice(0, 15);
        a2 = b.splice(16, number-15);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[16]) {
        a1 = b.slice(0, 16);
        a2 = b.splice(17, number-16);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[17]) {
        a1 = b.slice(0, 17);
        a2 = b.splice(18, number-17);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[18]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random3 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random3 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random3 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[11]) {
        a1 = b.slice(0, 11);
        a2 = b.splice(12, number-11);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[12]) {
        a1 = b.slice(0, 12);
        a2 = b.splice(13, number-12);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[13]) {
        a1 = b.slice(0, 13);
        a2 = b.splice(14, number-13);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[14]) {
        a1 = b.slice(0, 14);
        a2 = b.splice(15, number-14);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[15]) {
        a1 = b.slice(0, 15);
        a2 = b.splice(16, number-15);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[16]) {
        a1 = b.slice(0, 16);
        a2 = b.splice(17, number-16);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[17]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random4 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random4 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random4 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[11]) {
        a1 = b.slice(0, 11);
        a2 = b.splice(12, number-11);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[12]) {
        a1 = b.slice(0, 12);
        a2 = b.splice(13, number-12);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[13]) {
        a1 = b.slice(0, 13);
        a2 = b.splice(14, number-13);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[14]) {
        a1 = b.slice(0, 14);
        a2 = b.splice(15, number-14);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[15]) {
        a1 = b.slice(0, 15);
        a2 = b.splice(16, number-15);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[16]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random5 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random5 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random5 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[11]) {
        a1 = b.slice(0, 11);
        a2 = b.splice(12, number-11);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[12]) {
        a1 = b.slice(0, 12);
        a2 = b.splice(13, number-12);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[13]) {
        a1 = b.slice(0, 13);
        a2 = b.splice(14, number-13);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[14]) {
        a1 = b.slice(0, 14);
        a2 = b.splice(15, number-14);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[15]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random6 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random6 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random6 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b =  a3;
        console.log(b);
    }
    else if (random6 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[11]) {
        a1 = b.slice(0, 11);
        a2 = b.splice(12, number-11);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[12]) {
        a1 = b.slice(0, 12);
        a2 = b.splice(13, number-12);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[13]) {
        a1 = b.slice(0, 13);
        a2 = b.splice(14, number-13);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[14]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random7 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random7 == b[0]){
        b.shift();
        console.log(b);
    }
    else if (random7 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[11]) {
        a1 = b.slice(0, 11);
        a2 = b.splice(12, number-11);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[12]) {
        a1 = b.slice(0, 12);
        a2 = b.splice(13, number-12);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[13]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random8 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random8 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random8 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if(random8 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[11]) {
        a1 = b.slice(0, 11);
        a2 = b.splice(12, number-11);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[12]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random9 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random9 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random9 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[11]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random10 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random10 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random10 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[10]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random11 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random11 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random11 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random11 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random11 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random11 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random11 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random11 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random11 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random11 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random11 == b[9]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random12 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random12 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random12 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random12 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random12 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random12 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random12 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random12 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random12 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random12 == b[8]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random13 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random13 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random13 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random13 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random13 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random13 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random13 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random13 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random13 == b[7]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random14 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random14 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random14 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random14 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random14 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random14 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random14 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random14 == b[6]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random15 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random15 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random15 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random15 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random15 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random15 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random15 == b[5]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random16 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random16 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random16 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random16 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random16 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random16 == b[4]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random17 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random17 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random17 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random17 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random17 == b[3]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random18 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random18 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random18 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random18 == b[2]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random19 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random19 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random19 == b[1]) {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random20 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random20 == b[0]) {
        b.shift();
        console.log(b);
    }
    first.innerHTML = random1;
    second.innerHTML = random2;
    third.innerHTML = random3;
    forth.innerHTML = random4;
    fifth.innerHTML = random5;
    sixth.innerHTML = random6;
    seventh.innerHTML = random7;
    eight.innerHTML = random8;
    ninth.innerHTML = random9;
    tenth.innerHTML = random10;
    eleventh.innerHTML = random11;
    twelfth.innerHTML = random12;
    thirteenth.innerHTML = random13;
    fourteenth.innerHTML = random14;
    fifteenth.innerHTML = random15;
    sixteenth.innerHTML = random16;
    seventeenth.innerHTML = random17;
    eightteenth.innerHTML = random18;
    nineteenth.innerHTML = random19;
    twentieth.innerHTML = random20;
}
duplicate_check();
outputt.addEventListener('click', function() {
    inputt = input1.value;
    if (score == 0) {
        if (inputt == A) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 1) {
        if (inputt == B) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML= incorrect;
        }
    }
    else if (score == 2) {
        if (inputt == C) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 3) {
        if (inputt == D) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 4) {
        if (inputt = E) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 5) {
        if (inputt == F) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 6) {
        if (inputt == G) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 7) {
        if (inputt == H) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 8) {
        if (inputt == I) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 9) {
        if (input == J) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 10) {
        if (input == K) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 11) {
        if (input == L) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 12) {
        if (input == M) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 13) {
        if (input == N) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 14) {
        if (input == O) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 15) {
        if (input == P) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 16) {
        if (input == Q) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 17) {
        if (input == R) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 18) {
        if (input == S) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 19) {
        if (input == T) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 20) {
        if (input == V) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 21) {
        if (input == W) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
});