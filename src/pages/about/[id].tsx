import { useRouter } from "next/router";
import React from "react";

function AboutDynamic() {
  const router = useRouter();
  console.log(router);
  return <div>AboutDynamic {router.query.id}</div>;
}

export default AboutDynamic;
