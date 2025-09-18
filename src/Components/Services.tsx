import { Heart } from "lucide-react"

const Services = () => {
    const services = [
        {
            icon: <Heart />,
            title: "Genel Muayene",
            description: "Kuşlarınızın genel sağlık durumunu değerlendirmek için kapsamlı muayeneler yapıyoruz."
        },
        {
            icon: <Heart />,
            title: "Aşılar ve Parazit Kontrolü",
            description: "Kuşlarınızı hastalıklardan korumak için gerekli aşıları uyguluyor ve parazit kontrolü sağlıyoruz."
        },
        {
            icon: <Heart />,
            title: "Acil Müdahale",
            description: "Kuşlarınızın acil durumlarında hızlı ve etkili müdahale sağlıyoruz."
        }
    ]

    return (
        <section className="py-16 bg-gradient-to-r from-teal-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/*Grid */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/*Text Container*/}

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-5">Kuş Sağlığı</h2>


                        <div className="space-y-4">
                            {services.map((services, index) => {
                                const Icon = services.icon
                                return (
                                    <div key={index} className="flex items-center gap-4">
                                        {/*Icon*/}
                                        <div className="bg-teal-100 p-2 rounded-full">

                                            <div className="h-6 w-6 text-teal-500 flex items-center">
                                                {Icon}
                                            </div>
                                        </div>

                                        {/*Text*/}
                                        <div className="">
                                            <h3 className="font-semibold text-gray-900">{services.title}</h3>
                                            <p className="text-gray-600  leading-relaxed">{services.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/*Services Buton*/}
                        <a href="/hizmetler" className="inline-block bg-teal-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-teal-700 transition-colors mt-3">Tüm Hizmetlerimiz </a>

                    </div>


                    {/*Picture*/}

                    <div >
                        <img src="./src/img/dog.png" alt="Dog" className="rounded-2xl shadow-2xl" />
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Services