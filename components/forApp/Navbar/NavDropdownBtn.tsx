"use client";
import { Button } from "@/components/ui/button"
import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuGroup,
      DropdownMenuItem,
     
      DropdownMenuShortcut,
      DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";


interface NavProps {
      title: string;
      item1: string;
      item2: string;
      item3: string;
      item4: string;
      item5: string;
      link1: string;
      link2: string;
      link3: string;
      link4: string;
      link5: string;
}

export function NavDropdown({ title, item1, item2, item3, item4, item5, link1, link2, link3, link4, link5 }: NavProps) {
      return (
            <>
                  <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                              <Button variant="lunar" >{title}</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-auto">
                              <DropdownMenuGroup>
                                    <DropdownMenuItem>

                                          {item1}
                                          <DropdownMenuShortcut>
                                                <Link href={link1}>
                                                      <Button variant="outline" size="icon">
                                                            <ChevronRightIcon className="h-4 w-4" />
                                                      </Button>
                                                </Link>
                                          </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                          {item2}
                                          <DropdownMenuShortcut>
                                                <Link href={link2}>
                                                      <Button variant="outline" size="icon">
                                                            <ChevronRightIcon className="h-4 w-4" />
                                                      </Button>
                                                </Link>
                                          </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                          {item3}
                                          <DropdownMenuShortcut>
                                                <Link href={link3}>
                                                      <Button variant="outline" size="icon">
                                                            <ChevronRightIcon className="h-4 w-4" />
                                                      </Button>
                                                </Link>
                                          </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                          {item4}
                                          <DropdownMenuShortcut>
                                                <Link href={link4}>
                                                      <Button variant="outline" size="icon">
                                                            <ChevronRightIcon className="h-4 w-4" />
                                                      </Button>
                                                </Link>
                                          </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                          {item5}
                                          <DropdownMenuShortcut>
                                                <Link href={link5}>
                                                      <Button variant="outline" size="icon">
                                                            <ChevronRightIcon className="h-4 w-4" />
                                                      </Button>
                                                </Link>
                                          </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                              </DropdownMenuGroup>
                        </DropdownMenuContent>
                  </DropdownMenu>
            </>
      )
}
