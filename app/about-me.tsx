import Image from "next/image"

export default function AboutMe() {
  return (
    <>
      <div className="container flex flex-col md:flex-row gap-5">
        <div className="profile-image flex justify-center px-5">
          <Image
            className="rounded w-full"
            alt="profile_picture"
            src="/images/profile-picture.jpg"
            width={300}
            height={300}
          />
        </div>
        <div className="about-me">
          <span className="font-bold text-xl my-2">Acerca de mi</span>
          <br />
          <br />
          <span className="my-2">
            Hola! Mi nombre es Miguel y tengo gran afinidad hacía el trabajo colaborativo, me gusta
            crear diseños que inspiren e involucren a las personas. Como diseñador UI, considero que
            un buen producto no solo brinda una solución sino que permite crear una experiencia
            emocional en las personas que lo usan.
          </span>
          <br />
          <br />
          <span className="my-2">
            En mi proceso creativo utilizo herramientas como Figma, Adobe XD, Photoshop e
            Illustrator que me ayudan mucho en el flujo de trabajo para la producción de interfaces
            de usuario.
          </span>
          <button className="btn my-2 md:hidden flex gap-3 border dark:border-white border-black text-black rounded py-2 px-2 justify-center items-center hover:bg-primio hover:border-primio">
            <span>See More</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.16667 2.91663L12.25 6.99996M12.25 6.99996L8.16667 11.0833M12.25 6.99996L1.75 6.99996"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
