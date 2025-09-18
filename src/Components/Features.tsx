import { Clock, Heart, Shield } from "lucide-react"

const Features = () => {
    const features = [
        {
            icon: Heart,
            title: "Kuş Sağlığı Uzmanı",
            description: "Kuş sağlığı ve bakımı konusunda uzman veteriner hekimlerimizle en iyi hizmeti alırsınız."
        },
        {
            icon: Shield,
            title: "Güvenli Tedavi",
            description: "Kuşlarınızın sağlığı bizim önceliğimizdir. Güvenli ve etkili tedavi yöntemleri kullanıyoruz."
        },
        {
            icon: Clock,
            title: "Acil Durum Hizmetleri",
            description: "Acil durumlar için 7/24 hizmet veriyoruz, kuşlarınızın ihtiyaç duyduğu anda yanınızdayız."
        }
    ]


    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3" >

                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 ">

                        Neden Bizi Tercih Etmelisiniz ?
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Kuş sağlığı ve mutluluğu için uzman veterinerlik hizmetleri sunuyoruz. Kuşlarınızın ihtiyaçlarına yönelik kişiselleştirilmiş bakım ve tedavi planlarıyla, onların en iyi şekilde yaşamasını sağlıyoruz.
                    </p>
                </div>

                {/* Grid*/}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((features, index) => {
                        const Icon = features.icon

                        return (
                            //Card Container
                            <div key={index} className="my-4 text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors duration-100" >
                                {/*Icon*/}
                                <div className="w-16 h-16  bg-orange-100 rounded-full flex justify-center items-center mx-auto">
                                    <Icon className="w-8 h-8 text-orange-600" />
                                </div>
                                {/*Title*/}
                                <h3 className=" pt-4 py-2 text-xl font-semibold text-gray-900">{features.title}</h3>
                                {/*Description*/}
                                <p className="text-gray-600 leading-relaxed">{features.description}</p>

                            </div>
                        )
                    })}
                </div>

            </div>
        </div >


    )
}

export default Features