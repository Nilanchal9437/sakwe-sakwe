import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import * as yup from "yup";
import GameSubmit from "@/models/GameSubmit";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const entrie = await req.json();

    const schema = yup.object().shape({
      _id: yup.string().trim().required("submit id is missing!"),
    });

    return schema
      .validate({ ...entrie })
      .then(async (value) => {
        const res = await GameSubmit?.findOne({ _id: `${value._id}` });
        
        if (res?._id) {
          return NextResponse.json(
            {
              status: true,
              message: "submit detail's fetched successfully",
              data: res,
            },
            { status: 200 }
          );
        } else {
          return NextResponse.json(
            {
              status: false,
              message: "something went wrong fetching submit detail's",
              data: res,
            },
            { status: 303 }
          );
        }
      })
      .catch((err) => {
        if (err.errors != null && err.errors.length > 0) {
          return NextResponse.json(
            {
              status: false,
              message: "something went error occour submit detail's",
              data: err.errors[0],
            },
            { status: 500 }
          );
        } else {
          return NextResponse.json(
            {
              status: false,
              message: "An error occurred while fetching the submit details.",
              data: err.message,
            },
            { status: 500 }
          );
        }
      });
  } catch (err: any) {
    console.error("Error in getting submit details :::", err?.message);
    return NextResponse.json(
      {
        status: false,
        message: "Something went wrong while retrieving the submit details.",
        data: err.message,
      },
      { status: 500 }
    );
  }
}
