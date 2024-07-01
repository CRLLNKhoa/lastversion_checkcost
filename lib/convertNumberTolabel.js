import data from "@/jsons/get-don-vi.json";

export function convertNumberToLabel(number) {
  // Tìm giá trị lớn nhất trong data mà không vượt quá số đã cho
  for (let i = data.length - 1; i >= 0; i--) {
    const value = Math.pow(10, data[i].value);
    if (number >= value) {
      const num = (number / value).toFixed(1); // Chuyển số thành dạng thập phân
      return `${num}${data[i].label}`;
    }
  }
  return "0";
}

function findMatchingValue(inputString) {
  // Lấy số sau dấu "+" từ chuỗi đầu vào
  const targetValue = parseFloat(inputString.split("+")[1]);

  // Duyệt qua từng phần tử trong mảng dữ liệu đầu vào
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    // Kiểm tra nếu giá trị "value" của phần tử bằng hoặc lớn hơn giá trị mục tiêu
    if (parseFloat(item.value) >= targetValue) {
      // Nếu giá trị "value" chính xác bằng giá trị mục tiêu, trả về label tương ứng
      if (parseFloat(item.value) === targetValue) {
        return { unit: item.label, subUnit: targetValue - item.value};
      }
      // Nếu giá trị "value" lớn hơn giá trị mục tiêu, tìm giá trị gần nhất
      else {
        return { unit: data[i - 1].label, subUnit: targetValue -  data[i - 1].value };
      }
    }
  }

  // Nếu không tìm thấy giá trị phù hợp, trả về thông báo lỗi
  return "Không tìm thấy giá trị phù hợp trong mảng";
}

const formatUnit = (unit) => {
  switch (unit) {
    case 0:
      return 1;
    case 1:
      return 10;
    case 2:
      return 100;
    default:
      return 1;
  }
};

export function calculate(G, J, H) {
  // Tính log cơ số 10 của J và H
  let log10J = Math.log10(J);
  let log10H = Math.log10(H);

  // Tính phần nguyên của log10(J) và log10(H)
  let intLog10J = Math.floor(log10J);
  let intLog10H = Math.floor(log10H);

  // Tính hiệu của hai phần nguyên
  let diff = intLog10J - intLog10H;

  // Tính lũy thừa của G với hiệu vừa tính
  let GPower = Math.pow(G, diff);

  // Tính tỉ lệ J / H
  let ratio = J / H;

  // Tính tích của GPower và ratio
  let product = GPower * ratio;

  // Tính kết quả cuối cùng
  let result = 2 * Math.log(product) / Math.log(1.065);

  return Math.floor(result);
}

export function calculateDefault(G, J, H) {
  // Tính log cơ số 10 của J và H
  let log10J = Math.log10(J);
  let log10H = Math.log10(H);

  // Tính phần nguyên của log10(J) và log10(H)
  let intLog10J = Math.floor(log10J);
  let intLog10H = Math.floor(log10H);

  // Tính hiệu của hai phần nguyên
  let diff = intLog10J - intLog10H;

  // Tính lũy thừa của G với hiệu vừa tính
  let GPower = Math.pow(G, diff);

  // Tính tỉ lệ J / H
  let ratio = J / H;

  // Tính tích của GPower và ratio
  let product = GPower * ratio;

  // Tính kết quả cuối cùng
  let result = Math.log(product) / Math.log(1.065);

  return Math.floor(result);
}

export function convertToScientificNotation(L5) {
  if (L5 === 0) {
    return 0;
  } else {
    let logL5 = Math.log10(L5.toExponential(2));
    let power = Math.floor(logL5);
    let label = findMatchingValue(String(L5.toExponential(2)));
    let num = (L5 / Math.pow(10, power)).toFixed(2);
    return `${num * formatUnit(label.subUnit)}${label.unit}`;
  }
}
