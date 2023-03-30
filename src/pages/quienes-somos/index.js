import {useState} from 'react';
import Layout from '../../components/layout';
import Image from 'next/image';

const cursos = [
'FDI ANNUAL WORLD DENTAL CONGRESS, PARIS FRANCIA NOVIEMBRE-DICIEMBRE, 2000.',
'ESTETICA Y SU RELACIÓN PROTÉSICO-PERIODONTAL, MEXICALI, B. C., MARZO, 2001.',
'XXV REUNION DENTAL DE BAJA CALIFORNIA, AGOSTO 2001.',
'LII REUNION DENTAL DE PROVINCIA, ACAPULCO, GUERRERO, MAYO 2002.',
'ODONTOLOGIA TOTAL, TIJUANA, B. C., MAYO 2002.',
'XXVI REUNIÓN DENTAL DE BAJA CALIFORNIA, ENSENADA, B. C. AGOSTO 2002.',
'ODONTOLOGIA RESTAURADORA AVANZADA, ROSARITO, B. C., SEPTIEMBRE 2002',
'ADMINISTRACIÓN DE CONSULTORIOS Y OCLUSIÓN, MEXICLAI, B. C. SEPTIEMBRE, 2002.',
'CURSO MAGNO DE ORTODONCIA, ENDONDONCIA, PERIODONCIA Y REHABILITACIÓN ORAL, MEXICALI, B.C. MARZO 2003.',
'XIII SEMINARIO INTERNACIONAL DE ODONTOPEDIATRÍA, VERACRUZ, SEPTIEMBRE 2003.',
'DIPLOMADO EN ORTOPEDIA  DENTOFACIAL POR LA ASOCIACION ODONTOLOGICA MEXICANA PARA LA ENSEÑANZA Y LA INVESTIGACIÓN, A.C. Y LA UNIVERSIDAD AUTONOMA DE CIDUDAD JUAREZ,  FEBRERO 2004-FEBRERO 2005.',
'XIV CONGRESO INTERNACIONAL DE ODONTOPEDIATRÍA, QUERETARO, OCTUBRE 2005.',
'XIX CONGRESO INTERNACIONAL DE COLEGIO NACIONAL DE CIRUJANOS DENTISTAS A.C., ACAPULCO, OCTUBRE 2006.',
'SOCIA ACTIVA DEL COLEGIO MEXICANO DE ODONTOLOGÍA PARA EL BEBÉ A.C., GUADALAJARA, ENERO 2007.',
'CURSO TEORICO-PRACTICO DE ODONTOLOGÍA PARA EL BEBÉ, SAN LUIS POTOSÍ,MARZO 2007',
'CAPACITACIÓN PARA EL MANEJO DE LAS MANIOBRAS DE SOPORTE BÁSICO DE VIDA Y REANIMACIÓN CARDIOPULMONAR, MEXICALI, B.C., MARZO 2007.',
'CURSO “URGENCIAS MÉDICAS EN EL CONSULTORIO DENTAL”, MEXICALI, B.C., MARZO 2007.',
'PONENTE CON EL TEMA “CUIDADOS BUCALES DE LA MUJER DURANTE EL EMBARAZO Y ODONTOLOGÍA PARA EL BEBÉ”, MEXICALI, B.C., JULIO 2007.',
'XV CONGRESO INTERNACIONAL DE ODONTOPEDIATRÍA, MORELIA MICH., SEPTIEMBRE 2007.',
'CURSO DE ACTUALIZACIÓN EN ODONTOLOGÍA PARA EL BEBÉ, GUADALAJARA, NOVIEMBRE 2007.',
'SOCIA ACTIVA DEL COLEGIO MEXICANO DE ODONTOLOGÍA PARA EL BEBÉ A.C., GUADALAJARA, ENERO 2008.',
'SEGUNDO CONGRESO LATINOAMERICANO DE ODONTOLOGÍA PARA EL BEBÉ, GUADALAJARA, MAYO 2008.',
'XVI CONGRESO INTERNACIONAL DE ODONTOPEDIATRÍA, RIVIERA MAYA, QUINTANA ROO, OCTUBRE 2009.',
'XXI CONGRESO NACIONAL DE CIRUJANOS DENTISTAS NOVIEMBRE 2010.',
'XVII CONGRESO DE LA ACADEMIA MEXICANA DE ODONTOPEDIATRIA NOVIEMBRE 2011, CD DE MEXICO',
'CONGRESO MAGNO DE ACTUALIZACIÓN  ADM 2011, CCDM.',
'PRIMER EVENTO DE DONTOPEDIATRA.  ODONTOPEDIATRAS  DE MEXICALI Y SLRC MEXICALI B.C. 2014',
'SEGUNDO EVENTO DE ODONTOPEDIATRIA.  ODONTOPEDIATRAS DE MEXICALI Y SLRC. MEXICALI 2014',
'VISITA Y REVISIÓN BUCAL AL COLEGIO AMERICANO DE MEXICALI, FEBRERO 2015',
'CURSO TEORICO PRACTICO NUSMILE. MAYO 2015 MEXICALI, B.C.',
'CONGRESO LXVIII CAMINO ALA EXCELENCIA. ADM MEXICALI OCTUBRE 2015',
'IV CONGRESO NACIONAL DE ODONTOLOGIA PEDIATRICA.  UANL SEPTIEMBRE 2016.',
'LXIX CONGRESO ODONTOLOGICO, CDDM FILIAL ADM OCTUBRE 2016.',
'COLEGIO AMERICANO DE MEXICALI, PONENTE CON EL TEMA HIGIENE BUCAL, DICIEMBE 2016.',
'LXX CONGRESO MAGNO DONTOLOGICO CCDM, ADM MEXICALI MARZO 2017.',
'XX CONGRESO INTERNACIONAL DE DONTOPEDIATRIA ACADEMIA MEXICANA DE ODONTOPEDIATRIA, IXTAPA 2017.',
'REVISION DENTAL A COLEGIO AMERICANO DE MEXICALI NOVIMBRE 2017.',
'BIOFILM OFF NEUVA ERA DE ODONTOLOGÍA PEDIATRICA MEXCIALI 2018',
'INTERNATIOAL ASSOCIATION OF PEDIATRIC DENTISTRY, 27TH CONGRESS, CANCUN MXICO 2019.',
'ODONTOPEDIATRIA INCLUSIVA SEPTIEMBRE 2019',
'DARK SIDE OF PEDIATRIC DENTISTRY MEXICALI 2020.',
'CCDM CONGRESO REGIONAL DEL NOROESTE. OCTUBRE 2019',
'DIAGNOSOTICO Y TRATAMAIENTO ONLINE 2021',
'REHABILITACION EN ODONTOPEDIATRIA ON LINE 2021',
'MINIMA INTERVENCION EN ODONTOPEDIATRIA SESION ON LINE 2021.',
'NATIONAL ASSOCIATION OF EMERGENCY MEDICAL TECHICIANS, MEICALI B. C. VIGENCIA HASTA SEPTIEMBRE 2025',
'CURSO PRIMERO EN LA ESCENA SEPBEMBRE 2021',
'PREMIO A LA LEALTAD COMO MIEMBREO ACTIVO 23 AÑOS ASOCIACION DENTAL MEXICANA. DICEMBRE 2021',
'CENTRO DE ENSEÑANZA TECNICA Y SUPERIOR DIPLOMADO ADE ADMINISTRACION DE CLÍNICAS Y HOSPITALES OCTUBRE 2022.  76 HORAS .',
'XXI CONGRESO LATINOAMERICANO DE ODONTOPEITRIA MONTERREY, N. L., NOVIEMBRE 2022',
'XXI CONGRESO LATINOAMERICANO DE ODONTOPEDIATRIA CON PONENCIA ATENCIONESPECIAL A NIÑOS ESPECIALES, MONTERREY, N.L.,  NOVIEMBRE 2022.',
]

export default function Home() {
  const [selectedPage, setSelectedPage] = useState('quienes_somos');
  const [slideOpacity, setSlideOpacity] = useState(1);

  return (
    <Layout head_title='¿Quienes Somos?' selected_tab='¿Quienes Somos?'>
      <div className='slider'>
        <a className={selectedPage === 'quienes_somos' ? 'selectedSlider' : ''} onClick={() => {
          if (selectedPage !== 'quienes_somos') {
            setSlideOpacity(0);
          setTimeout(() => {
            setSelectedPage('quienes_somos')
          }, 300);
          setTimeout(() => {
            setSlideOpacity(1);
          }, 500);
          }
        }}>1</a>
      <a className={selectedPage === 'cv' ? 'selectedSlider' : ''} onClick={() => {
        if (selectedPage !== 'cv') {
          setSlideOpacity(0);
        setTimeout(() => {
          setSelectedPage('cv')
        }, 300);
        setTimeout(() => {
          setSlideOpacity(1);
        }, 500);
        }
      }}>2</a>
      </div>
    {selectedPage === 'quienes_somos' && <div id="slide-1" style={{
      opacity: slideOpacity,
    }}className='slide'>
    <h1 className='sectionTitle'>¿QUIENES SOMOS?</h1>
      
        <div>
          <div>
          <p>
            Equipo humano especializado en atención bucal para
bebés, niños y adolescentes con y sin necesidades especiales. Somos el lugar donde tú y tu familia se sentirán bien atendidos. Con nosotros encontrarás las herramientas para brindarles a sus hijos una vida bucal sana. Contamos con más de veinte años de experiencia en el ramo.
          </p>
          <div className='octagon'>

          </div>
          </div>
        </div>
    </div>}
    {selectedPage === 'cv' && <div id="slide-2" style={{
      opacity: slideOpacity,
    }}className='slide'>
    <h1 className='sectionTitle' style={{
          marginTop: '0',
        }}>CURRICULUM VITAE</h1>
      
        <div className='cvRow'>
          <div className='cvContainer' readOnly>
            <div className='cvText'>
            <p><strong>LICENCIATURA:</strong><br />
Facultad de odontología<br />
Universidad Autónoma de Nuevo León 1988-1994</p>

<p>SERVICIO SOCIAL:<br />
Efectuado en la Secretaría de Salubridad y Asistencia Pública en el centro de salud # 1 col. Nueva Morelos, Monterrey, N.L. del 1 de agosto de 1994 al 31 de julio de 1995.</p>

<p>TITULACIÓN:<br />
Diciembre 1993</p>

<p><strong>ESPECIALIDAD:</strong><br />
Odontopediatría, Facultad de odontología del Instituto de Ciencias Biomédicas de la Universidad Autónoma de Ciudad Juárez, <br />
1996-1998<br />
EXAMEN DE ESPECIALIDAD: 27 de abril de 1998</p>

<p>Miembro CNOI: 246 . Certificada por consejo Nacional de Odontología Infantil desde 2015.</p>

<p>
DIPLOMADO EN ORTOPEDIA MAXILOFACIAL por la Asociación Mexicana para la enseñanza y la investigación, A. C.</p>

<p><u>OTRAS ACTIVIDADES:</u><br />
2001- 2002 Instructor de la Clínica integral y Clínica Periférica en área de Odontopediatría de la facultad de odontología de la U.A.B.C.</p>

<p>Colaboradora del periódico la voz de la frontera con una sección titulada “Boquitas Sanas…niños felices”, donde se tratan temas de interés general en la salud bucal de los niños, que aparece todos los domingos desde abril de 1998 a la fecha.</p>

<p>Miembro activo del Colegio de Cirujanos Dentistas de Mexicali A.C. FILIAL ASOCIACIÓN DENTAL MEXICANA DESDE EL AÑO 2000 A LA FECHA.</p>

<p>Miembro del Consejo Nacional de Odontología Infantil, A.C. Miembro número 246.</p>

<p>Vicepresidenta y tesorera del Colegio de Cirujanos Dentistas de Mexicali A.C., 2001, presidenta electa periodo 2001-2002 del Colegio de Cirujanos Dentistas de Mexicali, B.C. A.C.</p>

<p>2002 Presidenta del Colegio de Cirujanos Dentistas de Mexicali B.C., A.C. FILIAL ADM.<br />
 COLEGIO AMERICANO DE MEXICALI, PONENTE CON EL TEMA HIGIENE BUCAL, DICIEMBE 2016.</p>

<p> COLEGIO AMERICANO DE MEXICALI, PONENTE CON EL TEMA HIGIENE BUCAL, DICIEMBE 2016.</p>

<p> DIPLOMADO ADE ADMINISTRACION DE CLÍNICAS Y HOSPITALES OCTUBRE 2022. 76 HORAS . CENTRO DE ENSEÑANZA TECNICA Y SUPERIOR.</p>

<p>XXI CONGRESO LATINOAMERICANO DE ODONTOPEDIATRIA CON PONENCIA ATENCIONESPECIAL A NIÑOS ESPECIALES, MONTERREY, N.L., NOVIEMBRE 2022</p>

<p></p>

<p></p>

<p style={{
  textAlign: 'center',
}}><strong>ASISTENCIA A CURSOS DEL 2000 A LA FECHA.</strong></p>


  {cursos.map((curso) => (
     <p> • {curso} <br/></p>
  ))}


<p>
</p>
            </div>
          </div>
      </div>
    </div>}
    </Layout>
  )
}
