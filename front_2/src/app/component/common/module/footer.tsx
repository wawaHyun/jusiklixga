import { CallIcon } from "@/app/atoms/icons/icons";


function Footer() {
    return (
        <div className="absolute bottom-0 border w-screen text-center">
            <table className="ggun-terms w-screen">
                <tr className="">
                    <th className="content-center" rowSpan={3}><CallIcon /> </th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td>02-555-5555</td>
                    <td></td>
                    <td>(주) 꾼 </td>
                </tr>
                <tr>
                    <td>09:00~06:00</td>
                    <td></td>
                    <td>서울특별시 강남구 역삼동 819-3 삼오빌딩 5-9층 </td>
                </tr>
            </table>
        </div>
    )
}

export default Footer;