package br.com.ipt.arche2.util;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public class JsonUtils {
	public static String object2JsonString(Object o){
		JSONObject jo = new JSONObject();
		
		try {
			jo.put(o.getClass().getName(), o);
		} catch (JSONException e) {
			e.printStackTrace();
		}
		
		return jo.toString();
	}
}
