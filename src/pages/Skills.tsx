import { useState } from "react"
import ButtonOutline from "../components/common/buttons/ButtonOutline"
import SkillSection from "../components/skills/SkillSection"
import { allSkills, skillsNavBtn } from "../data/data"
import Button from "../components/common/buttons/Button"
import NotFound from "../errors/NotFound"

const Skills = () => {

    const [search, setSearch] = useState("");

    const [skillsState, setSkillsState] = useState<string>("Skills");

    let filterSkills = allSkills.filter((elem) => elem.title == skillsState)

    const newData = allSkills.flatMap((elem) => elem.data).filter((data) => data.title.toLowerCase().includes(search.toLowerCase()))

    if (filterSkills.length === 0) filterSkills = allSkills;

    const handleSearchInput = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    return (
        <>
            <section>
                <div className="w-full flex flex-wrap justify-between mt-10 px-10 gap-7">
                    <div className="mb-2 mx-auto md:mx-4 md:mb-2">
                        <input className="border-b outline-none" value={search} placeholder="search" type="text" onInput={handleSearchInput} />
                    </div>
                    <div className="flex flex-wrap gap-4 items-center justify-center mx-auto md:mx-0">
                        {
                            skillsNavBtn.map((btn, index) => (
                                btn.title == skillsState ? <Button value={btn.title} key={index} /> : <ButtonOutline value={btn.title} key={index} onClick={() => setSkillsState(btn.title)} />
                            ))
                        }
                    </div>
                </div>

                {
                    search !== ""
                        ? (
                            newData.length === 0 ? <NotFound message={`${search} Not Found`} goBack={false} /> : <SkillSection title="Search" data={newData} />
                        )
                        : (
                            filterSkills.map((elem, index) => (
                                <SkillSection
                                    key={index}
                                    title={elem.title}
                                    data={elem.data}
                                />
                            ))
                        )
                }
            </section>
        </>
    )
}

export default Skills