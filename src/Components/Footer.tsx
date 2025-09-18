import { Clock, Facebook, Heart, Instagram, MapPin, Phone, Twitter } from "lucide-react"

const Footer = () => {
    const contactItems = [
        {
            icon: Phone,
            text: "+90 123 456 78 90",

        },
        {
            icon: MapPin,
            text: "Moda,Kadıköy/İstanbul",

        },
        {
            icon: Clock,
            text: "09:00 - 21:00",

        },


    ]

    const socialItems = [
        {
            icon: Facebook,
            link: "@ErdalKeskin61",
        },
        {
            icon: Twitter,
            link: "@ErdalKeskin",
        },
        {
            icon: Instagram,
            link: "@ErdalKeskin0661",
        },
    ]

    return (
        <footer className="bg-gray-900 text-white space-y-8">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* 3 sütunlu grid yapısı */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-start md:place-items-center">
                    {/*cLİNİC Info*/}

                    <div className="space-y-4">
                        <div className="flex gap-3 items-center">
                            {/*Icon*/}
                            <div className="bg-orange-500 p-2 rounded-full">
                                <Heart className="h-5 w-5 text-white" />
                            </div>

                            <div className="">
                                <h3 className="text-lg font-bold">Zafer Ayan</h3>
                                <p className="text-orange-400">Veteriner Kliniği</p>
                            </div>

                        </div>
                        <div className="text-gray-300">
                            <p>Kuş sağlığında uzmanlaşmış veteriner hekimlerimizle sağlıklı bir gelecek için yanınızdayız. Sevimli dostlarımızla birlikteyiz.</p>
                        </div>

                    </div>
                    {/*Contact Info*/}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">İletisim</h3>
                        <div className="space-y-3">
                            {contactItems.map((contact, index) => {
                                const Icon = contact.icon
                                return (
                                    <div key={index} className="flex items-start gap-2">

                                        <Icon className="w-5 h-5 text-orange-400" />
                                        <span className="text-gray-300">{contact.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/*Social Meda*/}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Sosyal Medya</h3>


                        <div className="space-y-3">
                            {socialItems.map((social, index) => {
                                const Icon = social.icon
                                return (
                                    <div key={index} className="flex items-start gap-2">

                                        <Icon className="w-5 h-5 text-gray-300" />
                                        <span className="text-gray-300">{social.link}</span>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>

            </div>

            {/* Alt Kısım */}

            <div className="border-t border-gray-800 py-4 text-center">
                <p className="text-gray-400">
                    @ 2025 Tüm Hakları Saklıdır. Erdal Keskin Tarafından Tasarlanmıştır.
                </p>
            </div>


        </footer>
    )
}

export default Footer