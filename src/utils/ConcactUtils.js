export function  getSeconds(footSeconds)
  {
      if(footSeconds.index==1)
      {
        return "*";
      }
      else if(footSeconds.index==2)
      {
        return footSeconds.index2.start+"-"+footSeconds.index2.end;
      }
      else if(footSeconds.index==3)
      {
        return footSeconds.index3.start+"/"+footSeconds.index3.loop
      }
      else if(footSeconds.index==4)
      {
        footSeconds.index4.sort();
        return footSeconds.index4.join(",");
      }
  }

