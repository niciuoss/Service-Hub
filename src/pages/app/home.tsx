import { Helmet } from "react-helmet-async"
import bannerImage from "@/assets/banner.png"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { FilterHome } from "@/components/filter-home"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Home(){
  return (
    <div className="">
      <>
        <Helmet title="Home"/>
        <div id="banner">
          <div className="pb-2">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1} 
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <div className="relative">
                  <img src={bannerImage} alt="Banner 1" className="w-full h-auto" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h2 className="text-2xl font-bold mb-2">Junte-se à comunidade ServiceHub</h2>
                    <h3 className="text-lg text-muted-foreground">Descubra uma variedade de serviços disponíveis para você!</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative">
                  <img src={bannerImage} alt="Banner 1" className="w-full h-auto" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h2 className="text-2xl font-bold mb-2">Junte-se à comunidade ServiceHub</h2>
                    <h3 className="text-lg text-muted-foreground">Descubra uma variedade de serviços disponíveis para você!</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative">
                  <img src={bannerImage} alt="Banner 1" className="w-full h-auto" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h2 className="text-2xl font-bold mb-2">Junte-se à comunidade ServiceHub</h2>
                    <h3 className="text-lg text-muted-foreground">Descubra uma variedade de serviços disponíveis para você!</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative">
                  <img src={bannerImage} alt="Banner 1" className="w-full h-auto" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h2 className="text-2xl font-bold mb-2">Junte-se à comunidade ServiceHub</h2>
                    <h3 className="text-lg text-muted-foreground">Descubra uma variedade de serviços disponíveis para você!</h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex justify-center pb-4">
            <FilterHome/>
          </div>
        </div>

        <div id="featureService" className="pt-4">
          <h1 className="font-medium pb-2">Serviços em destaque</h1>
          <div className="flex">
            <div className="flex flex-row">

            </div>
            <div>

            </div>
          </div> 
        </div>

        <div id="topRated">
          <h1 className="font-medium">Serviços mais bem avaliados</h1>
        </div>

        <div id="exclusiveDeals">

        </div>

        <footer></footer>
      </>
    </div>
  )
}