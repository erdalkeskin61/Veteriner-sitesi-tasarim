import { Heart } from "lucide-react"

const HeroImageContainer = () => {
    return (
        <div className="relative">
            {/* Image */}

            <img src="./src/img/bird.jpeg" alt="Papağan" className="rounded-2xl shadow-2xl" />

            {/*Experince Card*/}

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                    <Heart className="text-orange-600" />
                    <div><p className="font-semibold text-gray-900">Uzman Bakım </p>
                        <p className="text-gray-600 text-sm">7+yıl deneyim</p></div>
                </div>

            </div>
        </div>
    )
}

export default HeroImageContainer