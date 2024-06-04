'use client'

import { PG } from "@/app/component/common/enums/PG";
import Link from "next/link";
import Image from 'next/image'



export default function CardButton({id, title,description}:IBoard){
    return (
                <div className="max-w-sm b-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href={`${PG.ARTICLE}/mylist/${id}`}>
                        <Image alt = "articels" className="rounded-t-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAMAAAAIR25wAAABJlBMVEX///+Uu1wAAAD+n5ejzmWhy2SXv16VvFyeyGKYwF+cxWGTuVum0mcFBQWk0GadxmEqKiqPuFQYGBj19fU4ODiSkpLZ2dnr6+tcXFwNDQ3j4+P5+fmmpqYwMDCMsVclJSV2dnZSUlLJyckLDgeJtEu3t7f/r6aBgYGNjY0eHh5DQ0PAwMCbm5tsbGzQ0NCAolAeJhMpNBmt22xIWy04RyOhw3BLS0sWHA5ddTp3lkr/qqK5ubmsrKxui0VEVipkfj8yPx+vzIXT47zD2aPm79lVbDUYHxAhKRURFgstORx8nU1hPjvokYrCeXPY5sO56nM/KCZVNjOSXFivbmh/UEwjFxYdEhHrlIw8RyxCKymcY165dG//wLe505Wmxnjy9urB4pChsoniQvDrAAAT30lEQVR4nO1dCXva2JI1au0rZgcDZrENNmDW2GCzOE7AS9J5eb2+ZTqZ+f9/YqquEEggCdmWCG+G09/XwTbLPaq9bulycLDHHnvssccee+yxxx577LHHHv+/ET09vR3Gs5VUqvSSl50OTxNBLemtSFEGlKHnF9Vj+PyXXYTtIWYQoqhjr68pGFehGuTKXo3MsFptNCr1Y4pKeXzJJbIppuAiULVA1/Y2lBQqnfH4XBBS5PbgIHFFUbFAF/U25OC6e30umF+FPDinqMvAVvRWnFLuQsqYPUHB0NHzXda8IlCKJx3/nAmnTZxK4Ezwxwr861VZt44E8V+RhhOphtV3XACXRhXdf2ELi3sdYI1pQsrBK8etjuDyfO7EL462srxXIAuMEqUiLrJh+nUiXixkSY6QUajzZHT5l1qEXIDcjsbag4PkuU5liGF3mebcEsGl6/DwKExRuXCsOPdvyat0MXURL0TCu5oUFRZmXmtUFrIoKXPtwjypqD+cyzCrm1ZxV9OHg6FtZnMEIktX4hCvzpPEP6DpzIVymSamBaE2vt2legWsLLL+WyAaAVOJQqJUJ/66kVhqWYTKHRCep9tb5kswTEfq84eZWhZcAnFjlbmaxUmqkDX562Qic06lq7VTkGO4uKPWFD2IZuqFQiOWXlpMde63G0RKtWVgOo0o54aZUTua5dXqhVwkslwkFcbfQopApYbDK90/AKWr+dNTlAVe0/dtor5cXlqhjovhmJ63VYzfXiSJ4oXnYTVRDOdy4Ytio16p3t7uZGSaX3Ullb0cWsrAiq6GRaQCae151PEtdg3JYX2YjVARWHk0YslDE9WrYkUX2e2K0WRS4XCusLuVBSBMpTFlhSiUtf17shgzlxElXYDKjoYlBEQfBS95yltuHcW0lbDaURcOSILG4eri1rzVCXEsKzK13C6n4iAlUtTWl77aDRf601D9dteccroOgWNTnGvbBS7mJne8sxkRIB6JIZVkjIp58NVzk6tAErGTcUnHvMCLlrxEnwom6VVMLLxcgP8IJIxCPbyz3ZQXI4MloRIu/F+REUEpO9zdmLTHHnvssccee+yxxx7/kUiW6oXURcpDxf4fgdtsIxbRu/h2cxDReCF7mdnZttAajkoNY6KI9MLXnzE8xtIvkmtkd7czZEKiEJ5zKT912wqVXu+UJNNLwrnCjpeAiWxM1zblaTrK08KDbY8SxyNavfaclLLLTfHLgn75Z71+U+vQIp+/pqiYjRSKFNWmtefBtF2eb3fsJqnL1Fw+E7ajMkIIoE4pY/TJgiyIsi8ztMzkR71r8rKr7M45i9oVWdn1tCmqYkiHIPYosp+5ArLj9KQJIYnlaYabPOmdr93quCb1Acj2JC8zbMgAM6DsmuMl8twprz+RE1TxuUsUsLFD7bwK2aK9G/GyxkkLRiF6hD58rUmXBWfYHQksSJHnNZ4XRabTHJMdURsl/SHA3RSQ0EhVhZAFgogLXdsPAymVB3+jZVmT8giJkTVGbfZIXN6JXCOlExJpVrIyCok0LPN83eNdAKdmc9rttcqPj+XyrDdtqhpNj1rwRsc7MGyIbkHpajILDAyIhBwro5BsdjgTkDyUy+YRgXI3rwoq28df/uh5oijKqDzoiKIsS4PRYNobjyfNEASlkNRpOmR481EivBbl2UyPzY8DWRA7TRTUjx2BwOtNPeVVrSNNey0yJY5ojUcSTTch4uTsOvj6vNdsPB01myGpOZpiIqH0aSGksijYHzmfl8F0rsfQjDRpUVa0JtqD/exuFFX1ujuQ6I7Ki4KgqR2x/4huXeYknu7Co8gP8+YZlFGXpuXRTFeeh1533Ltr6/Twdzb3KhxdoGAlUM1lABM7eeBPDeSQJMoTeHT+g+R0idFoQjNyn4ilO8prxDmoYlMPnba3KlTIZWBCZvcohWgJrsM1C3kH28FopvyQ/BynOqlpR2MwkaP6oqqKLIfpQIhV1TwJneu50EECrkOPFkOrUJ/BDqcq0pNH8DD8IwJUg6i/QGRUfpbNq5Q4XXQ2hQW8asYyqxEMPT4Y0aMkkocopx8wzVaDjx0zovoM/z7kZXZliUJnYismyDQm8jqjkMRIj/gnQq/Td3L/QSJzThRI4MEBzyR5fYmCfDcfyVsgGk3GFepaWlc71FcUU4/kshLrJONAEUNrZiQahTRZZwRgmmASp8nScFiPFyqFYix3TiYQW5xgsKYZfpHmSqhu13lCVxLVu63nERWdiaSCG3jgBRtNCnE0LCsdMQ176ujNq4qQKI66TW3xfK1ZppRnZq6GLHh1ZZs77Xg3VVdlJUG6Rh9hocLOVyypIyuXcrncat9N83MhscIYcymNm79OCAGLiWq8OF/ebmoEFV85D36LhiJPaTJmRrzI61lrSAS+s4eH9t24N+72R6NmPs8J4sKBkwIRcg/DsbBaj2QQ8x+JOd1ujVEGKu2+iroFMemBNZs7/3w3lubaJDwP8lDo8TKtdmSa1kRRYE0pg4T5RXdJiQep3fGGoYna0zY9OaTfbRVkwTFdShkvLixhBLbzxJJ1SSGeQRoCx5qesYDE53uzLrfgyNF9hXoSjTJSosG2HIYv/cclLHuEwYVjxgrVNZkSy5Da9JkJeYHGi4zJs6DtmUTOydPtJbCQAdyRrhboimLxDkR5wMxsI886OEuApokXX7hAiUEPUdgKo6MISZoJA7TojmlZIihTe8B7Y7QCpFTO00vCNFyf9FYceRwsSSPXl1MnylxgxqUVGVazptmeoUEVDJa5aGFIzLas6eiYUibza4lO/FGyCkVYTfe8guO7K6kIisnLkOxbMUQWmnFhIeLbpqGvAEj4DntH6pIShq4tOIgixsfFh4IxXQua7RJNi+VE25xp9Wk0B6FqFlq8O0mKg29XYpgdqZKxiBGpA0X3BbNaXqStsUnitHWWkoxi6akL1ZUhVAUfbk9B75aellW7aNOSCydIq+V++W5Ay6YnSQzflIT1J2Msgphn/MgMXnDP+6tRNedlmNJhI6SnWX2CFGJUkZM4idV4WRuR+NubSB1ZpWmGYVS5I3WVO26NkyTSbQxOhsMRuNYWaowiOiVzCoT7YmXOGlw5bdTn5I7coaXmZL7dp1CzXm86mgyag+mU9FsGdGgNKjruHm1cIVSCoPNxMKXHvMlr68FjylgshQNPqDx0+9PpeEZ6RelPX43+KqWUFb2GatsmGVjcQnKv66iELTCb/WtfkYU8TDAthZ37PKstMdh4UIzqT/nt89lPP3/6atp1hnfpi7ZpkxYCr7fIGzENttnA9hVgSk+CyQY0TMT6q5W6kO8ZfNJ//+Xz2dlPN2dnN59//e3TVxDTrN2dPIuyg0tBwTwaikzqwoBvb2pQytTsj9U+yTXX9mGY5/503IWS59MZENJxgw9/p5SBzNC0Y6AS2Wu9GkNwmAcHHJkuIFtQTQvAHeYes1YPQa0ky/TfIKz8ZhDSWf30lVJG6urTLVBBldu8/pZQkSkB50RJyMJHZkcl5p9aA/vsgWNRhz7dWCn9Dm/gXk7RkAs/Gq4Df8gFSimDhYVlRSLASYcwt/j6k5nTzec/NlJimullFYlp3nGgBQb48PKzNfNmnTNv7Jj8/qeVUnojJS0/W6qCCO4nHWjPP5EGH+65euAhZv2xRqm8oY4X+H9gGjn/AZsu3s+fegUuFeohZJObOSyOe6DSn82Uzn7G8sGdkii0l1LisFEUqBeHYunBLt20B6e1bShd590LeS3fMlFi/hGwFy8p1BNv18KypyQ+UcqvZyuUZvZ9/gVIimUoJ6FUCJISKF7rJVKCMvUXC6V/mZNSB0pQUSgLe8OEK1BK4B5mL6DETFdi7c0nihqr7mLG6L38kMApgRO/znunhA3UT6uUurZ7N0vIPZSk8RO2VALdaYqeg054btMRKVljLeZDNmWSCbg7oPS3Rwm3yjYsyUwJpWQOTJg8bKKEKYdpNyRwxdOLWq+UiKX/YfLiZz8rEJbcpYymdB1apI3BU0pBCetZSqSaUj4vjQkdXltwtUUWHD/VXdQvHH8XtOLFrd2UDRChRLVQ+oWi7jQ3ShLZhXumjUyYFdtB14Cn4GC9bkxg07xHKT+bKH2CCtK9WsLeQ1tcsmaeAs7x9L0l90VZFjimlH8tKOnVkuurxVAL/d0iconYgAq4+XBh02pwv+bLIhC9w0q5tfaCiXX3F/Uw6OZkYXNGYwK2Jv55Y/YO7smHIIPpPJmGwHBrMBLwPFGJbKZ7pYRe/HezKVF3rlkvM1EsgY8E6+Ogp+JjL9E8HntiC/9w8094rVsIEPOPUL2YGnxknzHwyZsGfqjXNA+LQMrwDzd/QpXuWv/hRmB56cHh9VgOBr4ReEq9ICcStJ6y8A9YLFlatWvg2EnXUsaTPbngRyhj6CA8loEcpjdfDVP6DV7pqrM4KsGbdno5dC+BmxIRU7npVUzosRZNoq/LNqrzRTD/IPBP2xliOwa/RXu0JjEPKdG/zwy9e9zQd1iBwLa3M8OWtezUuYPFtFOvAjHBe+I914/kgqB32crQzRW17PBuAg3W8PXmRm+HU9MNRfoKiMMLNsObo4Z3iXn0EHxT0ZPxs3+jDfIvGigQsB+zFUpoTRu6wAtwWMOh5qG/e9JeNuchiHfbmBJA5DaETBPI8GT6883Nn3/goPyL9E6/9W4rY7uZ9OqspAu00COK6b9ASC3X6s8OMqR4WxkHvcTU1as3JnN11K8/48j/i0dzcBx0K6OTWWvh6Q5JFOdjApaZMI+UJlsaMyQzht6tgmk+khtNvNcky5dCcbKVg/uv9Ds+vEKi8+NyufcKRvr20hZiLXoHu8kSZ048k29qPMcdcnN4fSWpl7aQEZ1aZlA94fDk5OTwEBkdcvAv/OSRFYaALdxQUsFWvecLjes/eff+/Yf7L18+Etzf//XtGyG5+dWknRL8vUwxhxt21sHBwg+/AZfva2/y8cv9X6HNrEjTy+bWLn9xqXjcvQA+7z7cf3R+p+9fkNUGMfW2cO9FBZvAm3O1w5PQ+y8bC9Lv9+9cJSWpky2cbh32UJsCocMP69pmh6MPh26CEvHus4A1b7h2M4wNPBNCfPzmIihy91mwIzfJY/MEspOI3rtYkA0+HDpz4rG3F+jeBd7pO1Bd/d3J4f1L3/XeWfk4HAYNMtzGyW1Ubuknd8J9efn73jvqniRqmPYWfKcyBx4h1LOf4Fwweu/dikz44qh7EiM9BMgJb9SUaDe1O3n/yre+d7YnmnAKpmDHGzWfXROHk/ev7o1+cM77GA5vSg2ikYzHPI07btndybs3vP075/jE4N0XEf8jLp5r0HIt0A9DL3PeVnxxCU8M3u7qv+rh1xFNOo6fikJ6sfe24INLGoH3vPu/w5nb1AA++fa2DziSnMUkMG3/+191MvDo4hvepnYIFzGRfqDf+WtsU+V38tdbP+L7OxcxhVp+tyESmK66haTD0KtirAV/OYuJY3zvvFZxV8mtTDr58PYP+egcb8nd4zlfdwRja2cGrAiJe6slId67xCY8QMLPkXE8/cV1OODVmZAF986UyASBnxkEUHKfpPND70DzOEfNY3Hj1s9zAS/T7jt/3MkrSgobOGse2anyM4EoKe5Ta4fv/LFc5+SVuLyCLx+i41IxDmuxhz+mhHWT40dgF8LP6hYUr9x07hpz/pgSunHHaI4bVX4qXmL9Nh8LDv0xpYOjb47GhFLyM9biV7dOXNp3flFyzvM41e+R8Q2h9tCPQItwjEw4KOsvpRRUtM6UON8oOfdV8OxKXxt6ddcNWj9yVh3fQw6UWCzWfe0/JFwbx4fvAqdEJjB93bc9yuEOrVNx4VekdamZ8Eg0n083LEB14ejyfJSSU6MIb7H1edyw5DbA4R+lIwdKAZSAeqXuNHzmo3twoCQIAdyOGncZEfenACRwSB9wI9r35iRWgeO1UyUN+EbJvrwgp934v2mLX4Y86Ng6Pf9CrX1LRSLHufp/MDz68ZbDoPfLt8mcYKt4PAopiFMS8GTTnu3pE74VF7ZxSdIwvwvmph88a7vfsTOntzaPFzhaoySxMjk/PqDNTTy0ftSxkZNj+oBfGJ9IlGq3tUS2lKhdJhKZZDJ5dOAUND+uJkScLE9mAW4D4oa6MunYRNy1dko0OqxUGrlwLKzoB43r/1OodOT8PBfLFRuFarVeS65w+7JS1nLCCPfLAvwqAnIq+ji/fjKz2ZgS2Uojdm58d6srlEg4dxWvnyaM2afVekk/OTTYcS/82p7yOLTKyeinJIaNWMSy6kg4fByOXeB/FzkQz/lxLpxepZaOxLJk+2i1qqX141/T4VQtkInQZLbROCYf0VVFQRQ1mlYZkVZFnjlkvx9Ea4Xc4jjdSKxYqMaHpcvV2bMoqFqmVBtms9XUVTiyZJdOZY8O/vskxLEAgRXgA0RGZia9+XfLpGOVWz9pJWv1anF++cE4ulJIyOebIzykazRpNgfC4f/Ej40TomKFas3jFF00c5qNpy7m7xxuTFia0TRN4ASWlfJ5eP/nUf9hee5wrFHxZz5veGFSJqWslK8fr1uPj2UF8EhRj+Vya2Z8ZqX0iqomWarrXztDzbrdXm/cbrUfWvAhpoO0Fij6keol13TfHpGr+huKtMtKbPNHAI79KASjVu+FsolEIsfh3HkEDR7MHlxA+mL4ZpU4NZFS0jl426tUo1IoxCuVCrj87PA0W636U9om6tVKJZ6tnZ7WarelxCXEy2j06OggOg8rRwB/VLyWjVfjdfioEvr1o537WqY99thjjz322GOPPfbwB/8LhNsV9GptzAgAAAAASUVORK5CYII="/>
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {title}
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {description}
                        </p>    
                        <Link href={`${PG.ARTICLE}/mylist/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {title} Read more
                        </Link>
                    </div>  
                </div>
            )
        }