import CardSection from "../CardSection";

export default function Wisatawan() {
    return (
        <CardSection
            sectionID="wisatawan"
            title="wisatawan"
            desc={<>
                Pada hari ketiga Lebaran, 3 Mei 2022 jumlah wisatawan yang berekreasi jauh meningkat menjadi 26.740 orang.
                <br /><br />
                Begitu pula pada 4 Mei 2022, jumlahnya kembali meningkat menjadi 37.015 wisatawan.
                <br /><br />
                Candi Prambanan masih menjadi daya tarik utama kunjungan wisatawan.
                Dari jumlah 84.571 orang, 41.745 di antaranya adalah wisatawan nusantara yang mengunjungi Candi Prambanan ditambah 123 wisatawan mancanegara.
            </>}
        />
    )
}