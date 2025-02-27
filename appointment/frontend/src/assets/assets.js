import header_img from './header_img.png'
import profile from './profile.jpg'
import about_image from './about_image.png'
import logo1 from './logo1.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import arrow_icon from './arrow_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import gastr2 from './gastr2.png'
import gin4 from './gin4.png'
import kardio2 from './kardio2.png'
import neuro2 from './neuro2.png'
import orto2 from './orto2.png'
import pulmo2 from './pulmo2.png'

export const assets = {
    header_img,
    logo1,
    chats_icon,
    profile,
    arrow_icon,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Orthopedist',
        image: orto2
    },
    {
        speciality: 'Gynecologist',
        image: gin4
    },
    {
        speciality: 'Cardiologist',
        image: kardio2
    },
    {
        speciality: 'Pulmonologist',
        image: pulmo2
    },
    {
        speciality: 'Neurologist',
        image: neuro2
    },
    {
        speciality: 'Gastroenterologist',
        image: gastr2
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr Nebojsa Saric',
        image: doc1,
        speciality: 'Orthopedist',
        degree: 'MD',
        experience: '4 Years',
        about: 'Dr Saric is dedicated to providing exceptional orthopedic care with a focus on patient recovery and long-term mobility. His approach combines modern techniques with personalized treatment plans tailored to each individual. Dr Saric has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis.',
        fees: 30,
        address: 'Beogradski put 15, Subotica'
            
        
    },
    {
        _id: 'doc2',
        name: 'Dr Sara Milovic',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MD',
        experience: '10 Years',
        about: 'Dr Milovic prioritizes women’s health through compassionate care and advanced gynecological solutions. Her extensive experience ensures accurate diagnoses and effective treatment strategies for a variety of conditions. Dr Milovic prioritizes women’s health through compassionate care and advanced gynecological solutions. Her extensive experience ensures accurate diagnoses.',
        fees: 30,
        address: 'Beogradski put 15, Subotica'
            
        
    },
    {
        _id: 'doc3',
        name: 'Dr Uros Maravic',
        image: doc3,
        speciality: 'Cardiologist',
        degree: 'MD',
        experience: '5 Years',
        about: 'Dr Maravic is committed to improving heart health through comprehensive cardiovascular care. He emphasizes early detection and preventive measures to enhance patient well-being and longevity. Dr Maravic is committed to improving heart health through comprehensive cardiovascular care.',
        fees: 30,
        address:  'Beogradski put 15, Subotica'
            
        
    },
    {
        _id: 'doc4',
        name: 'Dr Stefan Maric',
        image: doc4,
        speciality: 'Pulmonologist',
        degree: 'MD',
        experience: '1 Year',
        about: 'Dr Maric focuses on treating respiratory disorders with a patient-centered approach. He strives to provide clear guidance and effective therapies to improve breathing and overall lung function. Dr Maric focuses on treating respiratory disorders with a patient-centered approach. He strives to provide clear guidance.',
        fees: 30,
        address: 'Beogradski put 15, Subotica'
    },
    {
        _id: 'doc5',
        name: 'Dr Dragana Nikic',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '6 Years',
        about: 'Dr Nikic specializes in diagnosing and managing neurological conditions with a strong emphasis on patient education and supportive care. She aims to improve her patients\' quality of life through tailored treatments. Dr Nikic specializes in diagnosing and managing neurological conditions with a strong emphasis on patient education and supportive care.',
        fees: 30,
        address: 'Beogradski put 15, Subotica'
            
        
    },
    {
        _id: 'doc6',
        name: 'Dr Milos Vidakovic',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '6 Years',
        about: 'Dr Vidakovic specializes in diagnosing and managing neurological conditions with a strong emphasis on patient education and supportive care. He aims to improve her patients\' quality of life through tailored treatments. Dr Vidakovic specializes in diagnosing and managing neurological conditions with a strong emphasis on patient education and supportive care.',
        fees: 30,
        address: 'Beogradski put 15, Subotica'
            
        
    },
    {
        _id: 'doc7',
        name: 'Dr David Mikic',
        image: doc7,
        speciality: 'Orthopedist',
        degree: 'MD',
        experience: '5 Years',
        about: 'Dr Mikic is dedicated to providing exceptional orthopedic care with a focus on patient recovery and long-term mobility. His approach combines modern techniques with personalized treatment plans tailored to each individual. Dr Mikic has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis.',
        fees: 30,
        address: 'Beogradski put 15, Subotica'
    },
    {
        _id: 'doc8',
        name: 'Dr Aleksandar Arsic',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MD',
        experience: '3 Years',
        about: 'Dr Arsic prioritizes women’s health through compassionate care and advanced gynecological solutions. His extensive experience ensures accurate diagnoses and effective treatment strategies for a variety of conditions. Dr Arsic prioritizes women’s health through compassionate care and advanced gynecological solutions. His extensive experience ensures accurate diagnoses.',
        fees: 30,
        address: 'Beogradski put 15, Subotica'
    },
    {
        _id: 'doc9',
        name: 'Dr Zeljana Dragovic',
        image: doc9,
        speciality: 'Cardiologist',
        degree: 'MD',
        experience: '1 Year',
        about: 'Dr Dragovic is committed to improving heart health through comprehensive cardiovascular care. She emphasizes early detection and preventive measures to enhance patient well-being and longevity. Dr Dragovic is committed to improving heart health through comprehensive cardiovascular care.',
        fees: 30,
        address: 'Beogradski put 15, Subotica'
    },
    {
        _id: 'doc10',
        name: 'Dr Nenad Spasic',
        image: doc10,
        speciality: 'Pulmonologist',
        degree: 'MD',
        experience: '2 Years',
        about: 'Dr Spasic focuses on treating respiratory disorders with a patient-centered approach. He strives to provide clear guidance and effective therapies to improve breathing and overall lung function. Dr Spasic focuses on treating respiratory disorders with a patient-centered approach. He strives to provide clear guidance.',
        fees: 30,
        address: 'Beogradski put 15, Subotica'
    },
    {
        _id: 'doc11',
        name: 'Dr Milana Ivanovic',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '8 Years',
        about: 'Dr Ivanovic specializes in diagnosing and managing neurological conditions with a strong emphasis on patient education and supportive care. She aims to improve her patients\' quality of life through tailored treatments. Dr Ivanovic specializes in diagnosing and managing neurological conditions with a strong emphasis on patient education and supportive care.',
        fees: 30,
        address:'Beogradski put 15, Subotica'
    },
    {
        _id: 'doc12',
        name: 'Dr Aljosa Bukvic',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MD',
        experience: '7 Years',
        about: 'Dr Bukvic specializes in diagnosing and managing neurological conditions with a strong emphasis on patient education and supportive care. He aims to improve her patients\' quality of life through tailored treatments. Dr Bukvic specializes in diagnosing and managing neurological conditions with a strong emphasis on patient education and supportive care.',
        fees: 30,
        address: 'Beogradski put 15, Subotica'
    },
    {
        _id: 'doc13',
        name: 'Dr Jelena Radic',
        image: doc13,
        speciality: 'Orthopedist',
        degree: 'MD',
        experience: '7 Years',
        about: 'Dr Radic is dedicated to providing exceptional orthopedic care with a focus on patient recovery and long-term mobility. Her approach combines modern techniques with personalized treatment plans tailored to each individual. Dr Radic has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis.',
        fees: 30,
        address: 'Beogradski put 15, Subotica'
    },
    {
        _id: 'doc14',
        name: 'Dr Dimitrije Jaric',
        image: doc14,
        speciality: 'Gastroenterologist',
        degree: 'MD',
        experience: '4 Years',
        about: 'Dr Jaric provides expert care in gastrointestinal health, offering personalized treatment solutions to address a variety of digestive issues while prioritizing patient comfort. Dr Jaric provides expert care in gastrointestinal health, offering personalized treatment solutions to address a variety of digestive issues while prioritizing patient comfort.',
        fees: 30,
        address: 'Beogradski put 15, Subotica'
    },
    {
        _id: 'doc15',
        name: 'Dr Jovana Vojvodic',
        image: doc15,
        speciality: 'Cardiologist',
        degree: 'MD',
        experience: '10 Years',
        about: 'Dr Vojvodic is committed to improving heart health through comprehensive cardiovascular care. She emphasizes early detection and preventive measures to enhance patient well-being and longevity. Dr Vojvodic is committed to improving heart health through comprehensive cardiovascular care.',
        fees: 30,
        address:'Beogradski put 15, Subotica'
    },
]