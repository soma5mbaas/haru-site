package io.haru.action

import com.redis._
import akka.dispatch.Foreach
import xitrum.annotation.GET
import xitrum.Action

@GET("SiteIndex")
class SiteIndex extends DefaultLayout{
   def execute() {
     renderView();
   }
}


@GET("classes")
class classes extends Action {
  val clients = new RedisClientPool("stage.haru.io", 6379)
  
  def execute() {
    val title   = param("appid")
    
    clients.withClient {
      client =>
        {
          val classes = client.smembers("ns:classes:" + title);
          respondJson(classes);
        }
    }
  }
}

@GET("schema")
class schema extends Action {
  val clients = new RedisClientPool("stage.haru.io", 6379)
  
  def execute() {
    val appid   = param("appid")
    val classes = param("classes")
    
    clients.withClient {
      client =>
        {
          val schmeaes = client.smembers("ns:schema:"+ classes +":" + appid);
          respondJson(schmeaes);
        }
    }
  }
}
