import './book-display.css'
import MiniMessage from "minimessage-js";
import {useState} from "react";

export function BookDisplay({text, maxPages}: {text: string, maxPages: number}) {
    const [page, setPage] = useState(1);

    const component = MiniMessage
        .miniMessage()
        .deserialize(text);

    return (
        <div className={'book-container w-[146px] h-[180px]'}>
            <div
                className={"absolute -z-[1] "}
                draggable={false}
            />

            <div className={"absolute right-[19px] top-[12px] book-text text-right"}>
                Page {page} of {maxPages}
            </div>

            <div className={"absolute left-[15px] top-[29px] book-text book-text-content select-text"}
                 dangerouslySetInnerHTML={{__html: MiniMessage.miniMessage().toHTML(component)}}
            />

            <div
                className={"absolute book-button book-backward bottom-[11px] left-[27px]"}
                draggable={false}
                hidden={page <= 1}
                onClick={() => {
                    if (page - 1 > 0) {
                        setPage(page - 1);
                    }
                }}
            />

            <div
                className={"absolute book-button book-forward bottom-[11px] right-[27px]"}
                draggable={false}
                hidden={page >= maxPages}
                onClick={() => {
                    if (page + 1 <= maxPages) {
                        setPage(page + 1);
                    }
                }}
            />

        </div>
    );
}


export function BookDisplayDemo() {
    const [text, setText] = useState(`<rainbow>Thanks for trying this!`);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="transform scale-[2] origin-top">
                    <BookDisplay text={text} maxPages={5} />
                </div>
                <div className="h-[200px]" />
                <p className="font-[Minecraft] text-center">Enter minimessage text here.</p>
                <textarea
                    className="border-2 border-black w-80 h-32 font-[Minecraft] p-2 text-sm"
                    value={text}
                    onChange={(e) => setText(e.currentTarget.value)}
                />
            </div>
        </div>
      )
}
