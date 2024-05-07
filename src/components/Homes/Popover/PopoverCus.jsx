"use client";
import { Popover } from '@radix-ui/themes';

const PopoverCus = ({ name, children }) => {
    return (
        <div>
            <>
                <Popover.Root>
                    <Popover.Trigger>
                        <button>
                            {name}
                        </button>
                    </Popover.Trigger>
                    <Popover.Content width="300px">
                        {children}
                    </Popover.Content>
                </Popover.Root>
            </>
        </div>
    )
}


export default PopoverCus