import OOAD from "../assets/images/OOAD.png";
import stem2024 from "../assets/images/stem2024.png";
import stem2025 from "../assets/images/stem2025.png";
import cro from "../assets/images/cro.png";
const Certificate = () => {
    const certificates = [
        {
            id: 1,
            Image: OOAD,
        },
        {
            id: 2,
            Image: stem2024,
        },
        {
            id: 3,
            Image: stem2025,
        },
        {
            id: 4,
            Image: cro,
        }
        

        
    ]
  return (
    <section id='certificate' className='min-h-screen flex flex-col items-center justify-center text-white py-20'>
        <h1 className='text-4xl font-bold text-center text-yellow-200 underline underline-offset-8 mb-10'>Certificate & Volunteer</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10'>
            {certificates.map((certificate) => (
                <div key={certificate.id} className='bg-gray-800 rounded-lg shadow-md overflow-hidden'>
                    <img src={certificate.Image} alt={`Certificate ${certificate.id}`} className='w-[400px] h-auto' />
                </div>
            ))}
        </div>

        
    </section>
    )
}

export default Certificate;