import React from 'react'
import LeftCard from './LeftCard'
import RightCard from './RightCard'

const FactsandFigure = () => {
  return (
    <section className='w-full h-auto mt-24'>
        <article className='w-full h-auto flex justify-center'>
            <div className='w-1000px h-20'>
                <p className='text-blue text-4xl font-bold'>Facts and Figures</p>
            </div>
        </article>

        <article className='w-full h-auto flex justify-center'>
            <LeftCard image={"territorial_waters.png"} title={"Territorial Waters"} context={"Many of the Jama Mapun or the natives of Mapun use their own traditional concept of territorial waters. Under this rule, the territorial waters of the municipality extend far beyond the 15km-limit set by the Local Government Code of 1990 to as far as Taganak and Mangsee Island to the south and to Cagayancillo Island up north. This claiming of territorial waters surrounding Mapun as part of Mapun territory is due to hundreds of years of geographic isolation and intense exploration, fishing and trade that brought about its own set of territorial rules."} />
        </article>


        <article className='w-full h-auto flex justify-center mt-10'>
            <RightCard image={"climate.png"} title={"Climate"} context={"The island municipality is classified under the 4th type of climate having distinct dry and wet seasons and is characterized by evenly distributed rainfall throughout the year. Heavy rains occur during the months of August to November. March and April are the hot summer months when most water sources in the highlands of the interior dry up. The island however has a normal average rainfall."}/>
        </article>

        <article className='w-full h-auto flex justify-center'>
            <LeftCard image={"population.png"} title={"Population"} context={"The 2020 Census gave a new population count of 30,038 with a density of 170/km2 (430/sq mi) compared with the 2015 Census which is 26,597 and has a per annum growth rate of +2.42%."}/>
        </article>


        <article className='w-full h-auto flex justify-center mt-10'>
            <RightCard image={"ethnic_affiliation.png"} title={"Ethnic Affiliation"} context={"The largest ethnic group is the Jama Mapun or the original inhabitants of the island where the local dialect Pullun Mapun remains as the predominant dialect being used. Other ethnic groups comprised the Sama Bajau, Pangutaran (Sulu), Tausug (Sulu), Yakan (Basilan) and a few others from Luzon and Visayas. It is of note however that in the Poblacion comprising the barangays of Liyubud and Lupah Pula, Bahasa Tausug is the dialect widely spoken. Siyama (Badjao dialect), Pangutaran, Cebuano, Chavacano, Illongo, Bahasa Malaysia or Melayu, English and Tagalog are also spoken on the island."}/>
        </article>


        <article className='w-full h-auto flex justify-center'>
            <LeftCard image={"religious_affiliation.png"} title={"Religious Affiliation"} context={"About 90% of the inhabitants in the Island Municipality are professing Islam while the rest are Roman Catholics, Protestants, Seventh Day Adventists and other faiths."}/>
        </article>


        <article className='w-full h-auto flex justify-center mt-10'>
            <RightCard image={"geography.png"} title={"Geography"} context={"The Island Municipality is surrounded by several islets that are known as Manda, Boan, Kinapusan, Pamilikan, Lapun-Lapun, Bintut and Muligi. Some of these islets serve as one of the places where Sea Turtles (Chelonioidea) would usually lay their eggs. Aside from islets that surrounds Mapun, it also has two mountains known Mt. Nanggoy, and Mt. Liran. Mt. Nanggoy is in Bohe Siluk in Brgy. Guppah and the trail towards the top of the mountain is too steep and some parts of it was around 80 degrees steep making those who want to venture to the top extra careful as one wrong step might send them rolling down. Mapun also has three lakes that can be considered as tourist attractions in the island, namely, Lake Danao/Ernestine, Lake Singuang, and Lake Sapah."}/>
        </article>               
    </section>
  )
}

export default FactsandFigure