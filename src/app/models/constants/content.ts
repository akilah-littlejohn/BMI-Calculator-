import { Content } from "../content-interface/interfaces";

export const ContentItems: Content = {
    header: {
        content: {
            title: "Body Mass Index Calculator",
            paragraph: `Better understand your weight in relation to your height using our 
        body mass index (BM) calculator. While BMI is not the sole determinant 
        of a healthy weight, it offers a valuable starting point to evaluate 
        your overall health and well-being.`,
        },
        Image: "assets/images/logo.svg"
    },
    articleResults: {
        content: {
            title: "What your BMI result means",
            paragraph: `A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a 
                healthy weight may lower your chances of experiencing health issues later on, 
                such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced 
                fat and sugar content, incorporating ample fruits and vegetables. Additionally, 
                strive for regular physical activity, ideally about 30 minutes daily for 
                five days a week.`,
        },


        Image: "assets/images/image-man-eating.webp"
    },
    articleLimitations: {
        title: "Limitations of BMI",
        paragraph: `Although BMI is often a practical indicator of healthy weight, it is not suited for 
            every person. Specific groups should carefully consider their BMI outcomes, and in 
            certain cases, the measurement may not be beneficial to use.`
    }
    ,
    column: {
        content: [
            { title: "Healthy eating", paragraph: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood." },
            { title: "Regular exercise", paragraph: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity." },
            { title: "Adequate Sleep", paragraph: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation." }
        ],
        images: [
            "assets/images/icon-eating.svg",
            "assets/images/icon-exercise.svg",
            "assets/images/icon-sleep.svg",
        ]

    },

    card: {
        content: [
            { title: "Gender", paragraph: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI." },
            { title: "Age", paragraph: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content." },
            { title: "Muscle", paragraph: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat." },
            { title: "Pregnancy", paragraph: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child." },
            { title: "Race", paragraph: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse." }
        ],
        images: [

            "assets/images/icon-gender.svg",
            "assets/images/icon-age.svg",
            "assets/images/icon-muscle.svg",
            "assets/images/icon-pregnancy.svg",
            "assets/images/icon-race.svg",


        ]

    }


};
