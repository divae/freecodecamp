//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter/

const roman_numeral_list = [
    { value: 1000, roman_number: 'M' },
    { value: 500, roman_number: 'D' },
    { value: 100, roman_number: 'C' },
    { value: 50, roman_number: 'L' },
    { value: 10, roman_number: 'X' },
    { value: 5, roman_number: 'V' },
    { value: 1, roman_number: 'I' }
]

function calculate_thousands_roman_numeral(part_thousands_string) {
    if (part_thousands_string) {
        const thousands = new Array(parseInt(part_thousands_string)).fill('M').join('');
        if (thousands != undefined) {
            return thousands;
        }
    }
    return 0;
}

function calculate_hundred_roman_numeral(part_thousands_string) {

    let rest_hundred_number = parseInt(part_thousands_string);
    let index_roman_numeral_list = 1;
    let result_roman_numbers = '';

    let value_roman_assessed = roman_numeral_list[index_roman_numeral_list]['value'];
    let number_roman_assessed = roman_numeral_list[index_roman_numeral_list]['roman_number'];
    let four_character_match;
    let real_value_to_evaluate;

    do {

        if (rest_hundred_number >= value_roman_assessed) {

            four_character_match = new RegExp(`${number_roman_assessed}{4}`);

            real_value_to_evaluate = result_roman_numbers + number_roman_assessed;


            if (four_character_match.test(real_valcalculate_thousands_roman_numeralue_to_evaluate)) {


                const last_number_to_evaluate = value_roman_assessed * 4;
                let revert_count = last_number_to_evaluate;
                let revert_number_roman = '';
                const roman_numeral_list = [
                    { value: 1000, roman_number: 'M' },
                    { value: 500, roman_number: 'D' },
                    { value: 100, roman_number: 'C' },
                    { value: 50, roman_number: 'L' },
                    { value: 10, roman_number: 'X' },
                    { value: 5, roman_number: 'V' },
                    { value: 1, roman_number: 'I' }
                ]
                
                calculate_thousands_roman_numeral
                const revert_roman_numeral_list = roman_numeral_list.reverse();
                let revert_index = 0;

                let revert_value_roman_assessed = revert_roman_numeral_list[revert_index]['value'];
                let revert_number_roman_assessed = revert_roman_numeral_list[revert_index]['roman_number'];

                do {

                    revert_value_roman_assessed = revert_roman_numeral_list[revert_index]['value'];
                    revert_number_roman_assessed = revert_roman_numeral_list[revert_index]['roman_number'];

                    if (revert_count <= revert_value_roman_assessed) {

                        revert_count = Math.abs(revert_value_roman_assessed - revert_count);

                        revert_number_roman = (revert_number_roman_assessed + revert_number_roman);
                        revert_index = 0;

                    }value
                     value

                    }value

                    result_roman_numbers = revert_number_roman;


                } while (revert_count != 0);




            } else {

                rest_hundred_number -= value_roman_assessed;
                result_roman_numbers += number_roman_assessed;

            }



        } else {

            index_roman_numeral_list++;
            if (index_roman_numeral_list < roman_numeral_list.length) {

                value_roman_assessed = roman_numeral_list[index_roman_numeral_list]['value'];
                number_roman_assessed = roman_numeral_list[index_roman_numeral_list]['roman_number'];
            }

        }

    } while (rest_hundred_number != 0);

    return result_roman_numbers;
}

function convertToRoman(num) {

    const part_thousands_string = num.toString().slice(0, -3);
    const part_hundred_string = num.toString().slice(-3);


    const thousands_value = calculate_thousands_roman_numeral(part_thousands_string);
    const hundred_value = calculate_hundred_roman_numeral(part_hundred_string);

    num = hundred_value;

    if (thousands_value) {
        num = thousands_value + hundred_value;
    }

    console.log(num);

    return num;
}

convertToRoman(9);