//Bài tập quản lý tuyển sinh
/*
input: điểm chuẩn, điểm 3 môn, khu vực, đối tượng
output: đậu, rớt
process: 
    1. nhập điểm 3 môn
    2. tính điểm ưu tiên D + E
    3. tính điểm tổng = A + B + C + ưu tiên
    4. so sánh, if a,b,c = 0 log:rớt
    5. if a,b,c != 0 => so sánh điểm chuẩn
*/
//Nhận vào khu vực => điểm ưu tiên
function calcAreaGrade(area){
    if(area === 'A'){
        return 2;
    }else if(area === 'B'){
        return 1;
    }else if(area === 'c'){
        return 0.5;
    }else{
        return 0;
    }
}

//Nhận vào đối tượng => điểm ưu tiên
function calcStudentTypeGrade(type){
    if(type === '1'){
        return 2.5;
    } if(type === '2'){
        return 1.5;
    } if(area === '3'){
        return 1;
    }else{
        return 0;
    }
}

function ex1(){
    var standardGrade = 28;
    var sub1 = 1;
    var sub2 = 8;
    var sub3 = 10;
    var area = 'A';
    var studentType = '1';    

    //Tính điểm ưu tiên theo khu vực
    var areaGrade = calcAreaGrade(area);

    //Tính điểm ưu tiên theo đối tượng
    var StudentTypeGrade = calcStudentTypeGrade(studentType);

    var totalGrade = sub1 + sub2 + sub3 + areaGrade + StudentTypeGrade;

        if(totalGrade >= standardGrade && sub1 > 0 && sub2 > 0 && sub3 > 0){
            console.log('Đậu',totalGrade);
        }else{
            console.log('Rớt',totalGrade);
        }
    }
ex1();


//Bài tập 2: Tính tiền điện
/*
input: số kw điện, giá điện theo kw
output: tiền điện tổng
process: 
    1. if số điện < 50 => 500*số điện
    2. if số điện < 100 => 500*số điện + (kw-50)*650
    3. if số điện < 200 => 500*số điện + 100*650 + (kw-100)*850
    4. if số điện < 350 => 500*số điện + 100*650 + 150*1100 + (số điện - 150) * 1100
    5. if số điện > 350 => 500*số điện + 100*650 + 150*1100 + 150* 1100 + kw-350 *1300
*/

 function calcElecPrice(kw){
    var kw = 220;
    var elecPrice = 0;
    if (kw < 50){
        elecPrice = kw*500;
    }else if(kw <= 100 && kw >50){
        elecPrice = 50*550 + (kw-50)*650;
    }else if(kw <= 200 && kw > 100){
        elecPrice = 50*550 + 100*650 + (kw-100)*850;
    }else if(kw <= 350 && kw > 200){
        elecPrice = 50*550 + 100*650 + 100*850 + (kw-150)*1100;
    }else{
        elecPrice = 50*550 + 100*650 + 100*850 + 150*1100 + (kw-350)*1300;
    }
    console.log('Giá điện là',elecPrice);
 }
 calcElecPrice();